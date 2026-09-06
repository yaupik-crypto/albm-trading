# AY100 — AY-000 架構、成本核算、第一步 Quick Win（2026-09-06）

> 角色：Clark（首席技術與商業戰略智囊）。本文係決策文件，唔係規格書。
> 目的：喺寫任何 code 之前，鎖定三件事 —— 共用基建點設計、每月要俾幾多錢、下週動邊個。

---

## 0. 三句總結

1. **基建唔係瓶頸，錢亦唔係。** AY100 起步嘅增量成本係 **US$10/月**（一個新 Supabase project）。就算去到 100 個 app、HK$20 萬 MRR，基建都應該少過收入 3%。
2. **真正嘅成本係「一個人維護 100 個對外產品」同「平台審核延遲」。** Shopify App Store 審核以星期計，唔係以日計。「每日 1–2 個 app」只可能係 Telegram bot／網頁工具嘅節奏；平台 app 要用「每日起、每週批量送審」嘅 pipeline 諗。
3. **下週第一個動工：AY-004（同行報價單分析），但要改寫 v1 定義。** 佢係唯一一個「你自己就係第一個付費客、你嘅 WhatsApp 通訊錄就係發行渠道」嘅項目。AY-000 骨架由 AY-004 抽出嚟，唔好先起工廠再起產品。

---

## 1. 現況盤點（我已經查過你嘅帳戶）

| 平台 | 現狀 | 對 AY100 嘅意義 |
|---|---|---|
| Vercel | Team `yaupik-cryptos-projects`，**Pro plan**，8 個 project（vinomatcher-v2、tmg-inventory、invoice-app、party-checklist、tchousehold-os、snappparty、hkcorkage、albm-trading） | Pro 已經俾緊 US$20/月。加 project 唔加錢。Cron 每 project 100 個、可以每分鐘跑。 |
| Supabase | Org `VinoMatcher`，**Pro plan**，6 個 ACTIVE project（HK-Corkage、Vinomatcher、SNAPPP、tchousehold-os、UMAPP、tmg-wms），散喺 5 個 region | Pro US$25/月 內含 US$10 compute credit（=1 個 Micro）。**每多一個 project 加 US$10/月**（API 已確認）。即係你而家 Supabase 大約俾緊 US$25 + 5×US$10 = US$75/月。 |
| 呢個 repo（albm-trading） | ALBM Trading Ltd 嘅公司 marketing 網站（Next.js 16 + shadcn），3 個 commit | **唔應該用嚟放 AY100 code。** AY100 要開新 repo。 |

### ⚠️ 兩個即時警號

- **Supabase「每 app 一個 project」= 每 app US$10/月固定成本。** 100 個 app 就係 US$1,000/月，而且 100 個獨立 DB 冇人管得掂。呢個係整套架構最大嘅錢坑，AY-000 第一條規則就係堵佢。
- **品牌分隔。** AY100 如果用 ALBM Trading Ltd（=TMG 法人）身份發佈，等於公開連結 TMG。可以接受（TMG 係對外主 brand），但 **AY100 任何對外物料永遠唔可以掂 HOWS**。建議 AY100 用獨立品牌／獨立 Stripe account，同兩間酒行都切開。

---

## 2. AY-000 架構設計 —— 「一個後端、一百個殼」

### 2.1 設計原則（比喻）

你以前做酒，唔會每開一隻新酒就租多一個倉。AY100 都係：**一個倉（Supabase project）、一套收銀（Stripe）、一套會員（Auth）**，每個 app 只係倉入面一個貨架（Postgres schema）同一個對外嘅門面（Vercel project 或 Telegram bot）。

### 2.2 四層分工

```
┌─────────────────────────────────────────────────────────┐
│ 對外門面（每 app 一個，可以係以下任何一種）                    │
│   Telegram bot ── WhatsApp bot ── Chrome ext ── Shopify app ── Web │
├─────────────────────────────────────────────────────────┤
│ packages/core（共用 npm package，一次寫，全部 app import）    │
│   auth · stripe entitlement · supabase client · bot router  │
│   usage metering · LLM gateway · logger                     │
├─────────────────────────────────────────────────────────┤
│ Supabase project「ay100-core」（得一個）                     │
│   schema core.*  ── users, orgs, subscriptions, usage_events │
│   schema ay004.* ── 呢個 app 自己嘅表                         │
│   schema ay005.* ── 下一個 app 自己嘅表                       │
├─────────────────────────────────────────────────────────┤
│ Stripe（得一個 account）                                     │
│   每 app = 一個 Product；webhook 寫入 core.subscriptions      │
└─────────────────────────────────────────────────────────┘
```

### 2.3 具體決定（鎖死，唔好每個 app 重新諗）

| 範疇 | 決定 | 點解 |
|---|---|---|
| Repo | 一個 monorepo `ay100`（pnpm workspaces + Turborepo）：`apps/ay004`、`apps/bots`、`packages/core` | 共用 code 一份；Cursor 每次只開一個 `apps/xxx` 就做到嘢 |
| Supabase | **得一個 project `ay100-core`**，開喺 `ap-southeast-1`（新加坡，最近香港）。每 app 一個 schema `ayNNN`，共用 `core` schema | US$10/月封頂；砍 app = `DROP SCHEMA ayNNN CASCADE`，一秒清走 |
| Auth | 一個 Supabase Auth，所有 app 共用帳號 | 用戶買第二個 app 唔使再註冊；email template 用變數帶 app 名 |
| 付費 | 一個 Stripe account；`core.subscriptions(user_id, app_id, status, plan)`；`core.hasAccess(user, app)` 一個 function 全世界用 | 每 app 得一條 webhook route 都唔使——core 處理晒 |
| Bot 類 app | **全部 bot 放喺同一個 Vercel project `ay-bots`**，route `/api/tg/<bot>`、`/api/wa/<bot>` | Telegram bot 唔需要獨立 deploy；一個 project 可以 host 幾十個 bot |
| Web／Extension 類 app | 每 app 一個 Vercel project，root directory 指向 `apps/ayNNN` | 獨立 domain、獨立 analytics、獨立砍 |
| Build | 每個 Vercel project 設 Ignored Build Step = `npx turbo-ignore` | 唔設嘅話：1 次 push = 100 個 project 全部重 build，燒晒 build minutes |
| 排程 | 輕量用 Vercel Cron（Pro 每分鐘可跑）；DB 內部用 `pg_cron`；需要常駐／秒級（例如套利 bot）用一部 US$5/月 VPS 或 Fly.io machine | Vercel function 唔適合長跑 |
| LLM | `packages/core/llm` 一個 gateway：統一 model、統一計 token、寫 `core.usage_events(user_id, app_id, tokens, cost_usd)` | 100 個 app 各自叫 API，你永遠唔知邊個 app 燒錢 |
| 用量上限 | 每 app 每 user 每月 hard cap（免費層特別要）| 防止一個免費 user 幫你燒 US$50 OCR |
| 域名 | 一個根域名（例如 `ay100.app`），每 app 一個 subdomain | US$10–15/年封頂；獨立域名留畀跑出嚟嘅贏家 |
| 審計 | 沿用你 §11 原則：所有寫入動作記 `core.audit_log(actor, app_id, before, after)` | 100 個 app 出事時追得返 |

### 2.4 唔好做嘅嘢

- ❌ 唔好先花一星期起「完美 boilerplate」。**Boilerplate 係由第二個 app 抽出嚟嘅，唔係第一個 app 之前寫嘅。** 第一個 app 直接起，第二個 app 時將重複部分搬入 `packages/core`。
- ❌ 唔好每 app 開 Supabase project（見上）。
- ❌ 唔好每 app 開 Stripe account／獨立 Auth。
- ❌ 唔好做需要人手客服嘅 app。100 個 app 每個一日一封 support email = 你全職做客服。設計原則：自助、bot 交付、退款自動。

---

## 3. 成本核算

### 3.1 固定成本（每月）

| 階段 | Vercel | Supabase | 其他固定 | 合計 |
|---|---|---|---|---|
| **今日（未開 AY100）** | US$20 (Pro) | ~US$75 (Pro + 5 額外 project) | — | ~US$95 |
| **AY100 起步（1–10 個 app）** | +US$0 | **+US$10**（ay100-core） | 域名 ~US$1/月；Chrome Web Store 一次性 US$5 | **+US$11/月 ≈ HK$86** |
| **20–30 個 app、幾百個付費 user** | +US$0–30（function 超額） | +US$5–50（compute 升 Small/Medium） | Apple Developer US$99/年（如做 iOS） | **+US$50–150/月** |
| **100 個 app、HK$200K MRR** | +US$50–150 | +US$60–110（Medium/Large compute） | VPS US$5–20 | **+US$150–300/月 ≈ HK$2,300** |

### 3.2 變動成本（跟用量走，先係真正要睇嘅數）

| 項目 | 單價（數量級） | 例子 |
|---|---|---|
| LLM OCR（Gemini Flash 級） | 每頁 **少過 US$0.01** | 一個客一個月 500 張報價單 ≈ US$1–5，收佢 HK$2,000 |
| LLM 對話（bot 回覆） | 每次 US$0.001–0.02 | 睇 model；一定要經 core gateway 計數 |
| Stripe（香港） | 約 3.4% + HK$2.35／筆 | HK$200K MRR → 約 HK$7,000/月手續費 |
| Telegram Bot API | **免費** | 冇上限 |
| WhatsApp Cloud API | 用戶主動嘅 24 小時對話期內回覆**目前免費**；商戶主動嘅 template message 逐條收費；**Meta 已宣佈 2026-08／2026-10 起 service message 亦逐條收費** | 「客人 send PDF、bot 回覆」呢種流程目前近乎免費，但要預佢下半年開始收 |
| Shopify App Store 分成 | 首 US$1M 累計收入 **0%**，之後 15%；另有 2.9% billing 手續費 | 對你嚟講等於零 |
| Chrome Web Store | 一次性 US$5；**冇內置收費**，要自己用 Stripe | 即係 extension 一定要有一個登入＋付費頁 |
| Apple App Store | US$99/年 + 15%（Small Business Program） | 最貴、審核最麻煩，建議最後先做 |

### 3.3 結論

- 基建成本喺整個計劃入面係**雜項**。HK$200K MRR 時基建 + Stripe 手續費合計都係收入嘅 4–5%。
- **唯一會爆嘅係 LLM 用量**，而且只會喺你冇計數嘅情況下爆。所以 `core.usage_events` 同每 user cap 係 day-1 必做，唔係 nice-to-have。

---

## 4. 戰略反饋 —— 邊個先動

### 4.1 評分表

| | AY-001 發票→庫存（Shopify/Chrome） | AY-002 差評挖掘 | AY-003 Z-Score bot | AY-004 報價單分析 |
|---|---|---|---|---|
| 用到你嘅獨門優勢（貿易 + OCR + 行內人脈） | ◐ | ✗ | ✗ | **✓✓** |
| 第一個付費客喺邊 | 要搵 | 獨立開發者（出名孤寒） | 冇（內部用） | **你自己 + 你識嘅酒商** |
| 上線摩擦 | Shopify app 審核 2–6 星期、OAuth、GDPR webhook 強制 | 低，但爬 Shopify/Chrome 評論有 ToS 風險 | **零**（Telegram） | WhatsApp 要 Meta 商業驗證（1–2 星期）；Telegram 零 |
| 錯咗嘅後果 | **寫錯客人庫存 = 不可逆、對外** | 冇 | 冇（只係訊號） | 冇（只係分析，唔落單） |
| 一星期做唔做到 v1 | ✗ | ✓ | ✓ | **✓**（WMS 已有 Gemini PO 抽取，OCR 部分做咗 70%） |
| 對 AY-000 骨架嘅驗證 | 高 | 低 | 中（bot + cron） | **高**（bot + OCR + Supabase + 付費） |
| 直接收入 | 中期 | 低 | 零 | **短期** |

### 4.2 我嘅建議：AY-004 先，但 v1 要改寫

**點解係 AY-004：**

1. **發行問題已經解決。** 你成日講「開發 2 小時、流量幾個月」。AY-004 嘅流量就係你 10 年累積嘅酒商 WhatsApp 通訊錄。呢個係其他三個項目冇嘅。
2. **你自己係第一個 user。** TMG 每日收緊供應商 list，同事人手睇。做完即刻慳自己時間，就算一個外部客都冇都唔蝕。
3. **完全符合「加強優勢，唔好補短板」。** AY-001／002 係去一個你冇位置嘅市場同人鬥；AY-004 係喺你已經贏緊嘅地方贏多啲。
4. **HK$2,000/月對酒商係雜費。** 一間做緊每月 HK$100 萬嘅酒行，一個月慳 10 個鐘人手就回本。

**v1 要改嘅地方（原定義有一個技術漏洞）：**

原文寫「自動調用公開 API 比對市場底價」。**呢個 API 唔存在**——Wine-Searcher 冇免費 API，付費 API 貴且有用途限制，爬佢又同你自己嘅 listing 命脈相衝。

改為：**benchmark 用「呢個用戶自己收過嘅所有報價」**。一個酒商一星期收 20 份 list，痛點從來唔係「市場價幾多」，而係「呢支酒今個星期邊個供應商最平、同上個月比升咗定跌咗」。呢個唔需要任何外部 API，數據全部係用戶自己 send 入嚟嘅，而且**用得越耐越準，越難走**。

v1 功能（三步，唔好多）：

1. Send PDF／相片入 bot → OCR → 正規化成 `(producer, wine, vintage, size, qty, price/btl, currency, DS/DP, supplier, date)`
2. 自動同用戶過往報價對表 → 回一張表：每支酒最平嘅供應商 + 價格變動
3. 匯出 CSV／Excel

**唔做：** 落單、市場價、評分、任何寫入用戶系統嘅嘢。

**渠道決定：** 香港酒商用 WhatsApp，唔用 Telegram，呢個係事實。但 Meta 商業驗證要 1–2 星期。所以：
- Day 1 就開始 Meta Business 驗證 + WhatsApp Cloud API 申請（平行跑）
- v1 用 Telegram bot 自己同同事先用（dogfood）
- 驗證批咗就切 WhatsApp，同一套 core bot router，只係換 adapter

**一個要諗清楚嘅衝突：** 賣呢個工具畀同行，等於幫對手變醒。我嘅睇法係酒行市場極分散，工具慳嘅係佢哋嘅時間，唔係你嘅 margin；而且你嘅真正護城河係 HOWS 嘅品類域名同 TMG 嘅熟客，唔係「睇 list 睇得快」。但呢個係你嘅判斷，唔係我嘅。

### 4.3 其他三個點處理

- **AY-003（Z-Score bot）— 第二個做，但係「主線一」嘅種子，唔係 AY100 產品。** 佢係內部工具，冇客、冇審核，最適合用嚟驗證 `apps/bots` + cron + core 呢條線。建議 AY-004 v1 出咗之後即刻做。一句提醒：Kimchi Premium 嘅本質係資本管制造成嘅結構性摩擦，今日 crypto spot 之間嘅 Z-score 已經係機構戰場；真正仲有摩擦嘅位係 Polymarket 呢類流動性差、結算規則複雜嘅市場。AY-003 v1 做「訊號」就夠，唔好做「自動執行」——執行係不可逆、對外。
- **AY-002（差評挖掘）— 唔好做成 app，做成一個 Claude 工作流。** 你要嘅係靈感，唔係產品。一段 prompt + 一個 CSV 已經解決。獨立開發者唔會月俾 HK$2,000 買呢樣嘢。
- **AY-001（發票→庫存）— 第 4–6 個先做，而且要由 AY-004 嘅 OCR 引擎衍生。** 佢係最大市場，但 Shopify 審核 + 寫入客人庫存（不可逆、對外）令佢完全唔係 quick win。做嘅時候 v1 只做「OCR → 草稿畀人 review → 人撳先寫入」，同你 §11 原則一致。

---

## 5. 「每日 1–2 個 app」嘅現實檢查

我要直接質疑呢個節奏，因為佢會影響你點樣量度自己：

| 類型 | 可行節奏 | 上線延遲 |
|---|---|---|
| Telegram／WhatsApp bot | 每日 1 個 v1 可行 | 零 |
| 網頁工具 | 每日 1 個 v1 可行 | 零 |
| Chrome extension | 每 2–3 日 1 個 | 審核 1–7 日 |
| Shopify app | 每星期 1 個 | 審核 2–6 星期，強制 OAuth + GDPR webhooks + Polaris |
| iOS app | 每 2 星期 1 個 | 審核數日，要 Mac、要 US$99/年 |

**結論：「每日 1–2 個」係 build 嘅節奏，唔係 launch 嘅節奏。** 平台 app 會有 2–6 星期嘅 pipeline，所以你嘅 backlog 要分「起緊」「送咗審」「上咗架」「觀察期」「砍／谷」五個狀態，唔係一條直線。

另一個要面對嘅數：Micro-SaaS 收入係冪律分佈。100 個 app 唔會係 100 × HK$2,000；比較似 **100 個起 → 30 個上到架 → 8 個有付費客 → 2–3 個帶動大部分收入**。呢個唔係壞消息——佢意味住「汰弱留強」嘅規則同「谷贏家」嘅能力先係計劃嘅核心，起 app 嘅速度反而係其次。

---

## 6. 任務管理方式（建議）

### 6.1 工具

- **一個 GitHub repo `ay100`**（monorepo）。呢個 albm-trading repo 唔好再放 AY100 嘢。
- **GitHub Issues = backlog。** 每個 AY-NNN 一個 issue，用固定模板（見 6.2）。Label：`stage:idea` `stage:building` `stage:submitted` `stage:live` `stage:watch` `stage:kill` `stage:scale`。
- **Claude Code「AY100」environment** 指向 `ay100` repo，設 SessionStart hook 裝 pnpm + 拉 env。
- **Cursor** 做每個 `apps/ayNNN` 嘅實作；Claude 做 spec、review、架構決定。
- **每週一 Routine（Claude 自動跑）：** 由 Stripe + `core.usage_events` 拉每 app 嘅 MRR、付費人數、LLM 成本、support 次數 → 出一張「汰弱留強」表。**AI 出表，你撳「砍」或「谷」。** 符合 §11：可逆／不可逆分揀。

### 6.2 Issue 模板（每個 app 起之前填，填唔到就唔好起）

```
## AY-NNN <名>
- 一句痛點：
- 邊個俾錢、佢而家點解決：
- 發行平台（自帶流量嗰個）：
- 定價（月費）：
- v1 三個功能（唔准多過三個）：
- 唔做嘅嘢：
- 錯咗會點（可逆？對外？）：
- 砍掉條件：上架後 30 日 < 3 個付費 user → kill
- 谷大條件：60 日 > HK$5,000 MRR → 開獨立域名 + 投內容
- LLM 成本上限（每 user 每月 USD）：
```

### 6.3 下週節奏（AY-004 v1）

| 日 | 做乜 | 邊個做 |
|---|---|---|
| 一 | 開 `ay100` repo + monorepo 骨架；開 `ay100-core` Supabase project（US$10/月，我要你確認先開）；開始 Meta Business 驗證 | Claude 出 spec，Cursor 起 |
| 二 | `core` schema（users／subscriptions／usage_events／audit_log）+ Telegram bot router | Cursor |
| 三 | 由 tmg-wms 搬 Gemini PO 抽取邏輯入 `packages/core/ocr`，改成報價單 schema | Cursor |
| 四 | 對表邏輯 + CSV 匯出；你同同事用真 list 試 | Cursor + 你 |
| 五 | 修 OCR 錯誤；Claude review 全部 code；寫 AY-005 issue | 全部 |
| 下週 | Stripe product + 付費牆；WhatsApp adapter（如驗證批咗）；send 畀 3 個相熟酒商 | — |

---

## 7. 我需要你答嘅（三個決定，答完先開工）

1. **AY100 用咩身份發佈？** 獨立品牌（建議）／ALBM Trading（=連結 TMG）／其他。影響 Stripe account、域名、App Store developer 名。
2. **開 `ay100-core` Supabase project（US$10/月，ap-southeast-1）—— 批唔批？** 呢個係有錢出嘅動作，我唔會自己開。
3. **AY-004 賣畀同行呢個衝突，你接唔接受？** 如果唔接受，AY-004 就係純內部工具，AY100 第一個對外產品改為 AY-003 嘅「訊號訂閱」版或者 AY-001。

---

## 附錄：本文引用嘅價格來源

- Shopify 分成：https://shopify.dev/docs/apps/launch/distribution/revenue-share
- Vercel Cron 限額：https://vercel.com/changelog/cron-jobs-now-support-100-per-project-on-every-plan
- WhatsApp 收費：https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing
- Supabase Pro：https://supabase.com/pricing（額外 project US$10/月由 Supabase API 直接確認）

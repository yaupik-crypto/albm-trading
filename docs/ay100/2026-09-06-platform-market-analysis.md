# AY100 — 獲客平台市場分析：邊個係我哋嘅「Wine-Searcher」（2026-09-06）

> 問題：AY100 係全新、獨立嘅生意，冇自己流量。當年做酒靠 Wine-Searcher 帶客，而家做 app 邊個平台可以做同一件事？點樣用平台自己嘅數據搵需求，而唔係「我識咩就做咩」？「起 100 個、數據揀 5 個」現唔現實？

---

## 0. 結論先行

1. **Wine-Searcher 嘅本質係三樣嘢：買家帶住意圖嚟、買家有銀包、平台幫你收錢。** 用呢三條過濾，真正合格嘅只有兩三個平台，唔係「乜平台都試」。
2. **首 20 個 app 集中兩個平台：Shopify App Store（主）+ Chrome Web Store（副）。** Telegram 係主線一（套利）嘅交付層，唔係 AY100 嘅獲客平台。Apple／Google Workspace／Atlassian／ChatGPT apps 列入第二波，每個有明確觸發條件。
3. **「起 100 揀 5」係現實嘅，但只有當佢係一個漏斗，唔係一張彩票。** 需求驗證要喺起之前用平台數據做；每個 app 上架要有一套固定嘅最低限度 launch 動作，否則你量度到嘅係自己嘅推廣力度，唔係市場需求。
4. **2026 年底 HK$20 萬／月唔現實**（仲有 4 個月）。2026 年底現實嘅目標係：30 個上架、3–5 個有付費客、1 個過 HK$10K MRR、**知道邊個平台係你嘅 Wine-Searcher**。第二樣先係最值錢嘅產出。

---

## 1. Wine-Searcher 標準 —— 一個平台要合格嘅六個條件

當年 Wine-Searcher 做到嘅，唔係「有人流」咁簡單。係：

| # | 條件 | Wine-Searcher 點做到 | 對 app 平台嘅意思 |
|---|---|---|---|
| 1 | **買家帶意圖嚟** | 上去嘅人係想買嗰支酒 | 平台有搜尋框、有分類、用戶係「我要解決 X」咁嚟，唔係漫無目的碌 |
| 2 | **買家有銀包** | 買酒嘅人本身就係嚟俾錢 | 用戶係商家／專業人士，月費對佢係雜費（B2B ≫ B2C） |
| 3 | **平台幫你收錢／降低信任門檻** | 佢嘅 listing 就係信任背書 | 內置 billing（喺平台張單度扣）＝轉換率高幾倍；冇嘅話你要自己搞 Stripe + 登入 |
| 4 | **分成合理** | 月費固定，唔抽成 | 0–15% 可接受；30% 以上要諗清楚 |
| 5 | **上架快、規則穩** | 爬你網站，你唔使做嘢 | 審核以日計 vs 以月計；API 唔會每季逼你改 |
| 6 | **一個人維護得掂** | 冇維護 | 冇企業級 support 期望；出事唔會有人打電話鬧你 |

**分辨器（借你自己嘅原則）：** 「呢個平台係買家搵工具嘅地方，定係開發者放工具嘅地方？」前者係 Wine-Searcher，後者係倉。好多「app store」其實係倉。

---

## 2. 平台逐個評分

評分：A＝主平台，B＝副／第二波，C＝贏家先搬過去，W＝觀察。

| 平台 | 買家係邊個 | 內置收費 | 分成 | 審核 | 飽和度 | 一人維護 | 評分 | 角色 |
|---|---|---|---|---|---|---|---|---|
| **Shopify App Store** | 商家（有預算、每月俾緊 Shopify 錢） | ✅ Billing API，喺 Shopify 張單扣 | 首 US$1M 累計 0%，之後 15%；另 2.9% 手續費 | 2–6 星期，強制 OAuth + GDPR webhook + 嵌入式 | 8,000+ app。Reviews／upsell／email 極飽和；**營運／B2B／批發／庫存／採購細分稀疏** | 中（API 每季一版，一年內要跟） | **A** | 主平台 |
| **Chrome Web Store** | 任何人；B2B extension（服務特定網站嘅專業用戶）先有人俾錢 | ❌ 2021 年關咗，要自己 Stripe（或 ExtensionPay 5%） | 0%（一次性 US$5） | 1–7 日 | 消費類極飽和；針對特定 web app（Shopify admin、Amazon Seller Central、LinkedIn、Airbnb host）嘅工具仲有位 | 高（Manifest V3 已穩定） | **A−** | 副平台：快速驗證、低成本 |
| **Telegram Bot／Mini App** | crypto／trading／技術人群，全球 | ◐ Telegram Stars（經 App Store 買，實質俾緊 30%）；可以出去用 Stripe | 0% | 零審核 | 冇官方 store，靠 channel 同 group 發現 | 極高 | **A（主線一）** | 套利訊號、內部工具 |
| **WhatsApp** | 香港／東南亞中小企 | ❌ | 0%（Meta 訊息費） | Meta 商業驗證 1–2 星期 | 冇 store，靠自己人脈 | 高 | B（只限 AY-004） | 酒行工具 |
| **Google Workspace Marketplace** | Sheets／Gmail／Docs 用戶，大量 SMB | ❌ 要自己 Stripe + licence 檢查 | 0% | 1–2 星期 | Mail merge 類飽和；「單一痛點小工具」有位；用戶預期免費 | 高 | **B** | 第二波 |
| **Atlassian Marketplace（Jira／Confluence）** | 企業 IT 同 PM，預算最高 | ✅ | Forge 首 US$1M 累計 0%，之後 17%（2026-10 起） | 有 | 對比 Shopify 每一蚊嘅競爭少；但買家期望企業級 support | 低（企業客會追你） | B− | 第二波，得「零 support」型工具先做 |
| **Xero／QuickBooks App Store** | SMB 財務／會計 | ❌ | 0% | 有 | 發票 OCR 被 Dext／Hubdoc 壟斷；細分（例如特定行業）有位 | 中 | B | AY-001 變體 |
| **Apple App Store／Google Play** | 消費者 | ✅（15%） | 15% + US$99/年 | 數日，要 Mac | 極飽和 | 中（每年 OS 更新） | **C** | 只做明確手機場景（拍照 OCR） |
| **ChatGPT Apps／Claude connectors（MCP）** | 8 億+ 週活 | ◐ 外部 checkout；Agentic Commerce Protocol 未普及 | 未定 | 有 | 剛開，早期 | 高 | **W** | 流量最大、收費最未成熟。2024 GPT Store 承諾分成最後冇下文，要記住 |
| **AppSumo** | 帶銀包嚟搵 deal 嘅 SMB | ✅ | 舊客銷售抽 70%；新客你收 95% | 一星期 | — | 中（lifetime deal = 終身 support 責任） | C | 贏家嘅現金加速器，唔係起步平台 |
| **WordPress／WooCommerce** | 站長 | ❌ | 0% | 數日 | 極飽和、免費文化 | 中 | C | 唔做 |
| **Wix／BigCommerce／Squarespace app** | Shopify 嘅細版 | ✅ | 各異 | 有 | 少人做 | 中 | C | Shopify 贏家直接 port |

### 2.1 Shopify 點解係主平台（同你嘅背景無關嘅理由）

- **唯一同時滿足六個條件嘅平台。** 商家搵工具（1）、商家有預算（2）、Shopify 幫你扣數（3）、首 US$1M 零分成（4）、規則穩定（5）、大部分 app 一個人維護（6）。
- **數據：** 平台上 8,000+ app，開發者累計收入超過 US$1.5B；但中位數 app 月入少過 US$1,000，頭 10% 過 US$100K ARR。即係——冪律，但頭部真係有錢。
- **稀疏位喺邊：** 消費者向嘅（reviews、upsell、popup、email）已經係紅海，大公司同 Shopify 自己都做緊。**商家後台營運**（採購、供應商、B2B 報價、庫存對數、多倉、批發定價、發票）明顯少 app、評分差、而且買家係俾緊錢請人做呢啲嘢嘅老闆。呢個唔係「你識」所以揀，係「數據話少人做而有人俾錢」。

### 2.2 Chrome 點解係副平台

- **上架最快、最平。** 一個 extension 由起到上架可以喺 3 日內。
- **代價係要自己收錢。** 冇 billing = 每個 extension 都要登入 + Stripe。AY-000 嘅 core 一次過解決呢件事，之後每個 extension 都免費得到。
- **邊類 Chrome extension 有人俾錢：** 服務「用緊某個 web app 返工嘅人」——Shopify admin、Amazon Seller Central、eBay、LinkedIn Recruiter、Airbnb host、Upwork。佢哋每日對住嗰個網頁 8 個鐘，一個慳時間嘅按鈕值 US$10/月。

### 2.3 點解 Apple／Google Play 而家唔做

- 六條入面佢哋只滿足 3 同 4（收費同分成），其餘全部差：消費者冇預算、極飽和、審核麻煩、要 Mac。
- 例外：某個工具明確係手機場景（拍照 → OCR → 結果），而且已經喺其他平台證明咗有人俾錢。到時用 Expo 做，唔係一開始做。

### 2.4 ChatGPT apps／MCP：免費期權，唔係平台

- 每個 AY app 嘅後端本身就係一個 API。加一個 MCP endpoint 係幾十行 code。所以**每個 app 都順手出一個 MCP／ChatGPT app 版本**，成本近零，等於買咗一張免費彩票。
- 但唔好指望佢收錢。2024 年 GPT Store 講過分成，最後冇；2026 年 Apps SDK 講緊 Agentic Commerce Protocol，都係「將會」。當佢係流量來源，唔係收入來源。

---

## 3. 點樣用平台數據搵需求（方法）

你講得啱：**唔係「我識咩就做咩」，係「數據話有需求就做」。** 但「數據」要有方法，否則變成「我覺得」。以下係四個信號，每個平台都適用：

### 3.1 四個需求信號

| 信號 | 係乜 | 點量度 | 強度 |
|---|---|---|---|
| **① 搜尋缺口** | 有人搜、但結果少或者差 | 平台搜尋框 autocomplete（有 autocomplete = 有人搜）；結果數 < 10 或者頭 5 個平均 < 4 星 | 中 |
| **② 差評礦** | 對手做咗但做得差 | 對手 1–3 星評論入面「wish」「doesn't」「can't」「missing」「no way to」句子。同一句抱怨出現 ≥ 5 次 = 一個 app | **強**（有人已經俾緊錢而唔滿意） |
| **③ 論壇求救** | 有人問「有冇 app 可以…」 | Shopify Community、r/shopify、r/ecommerce、r/FulfillmentByAmazon、行業 Facebook group。搜 "is there an app that" / "looking for a tool" | 中 |
| **④ 付費證據** | 有人已經用錢投票 | Upwork／Fiverr 有人出價請人整同類嘢；對手有付費 plan 而且 ≥ 50 個評論；Zapier 上嗰個 integration 係熱門 | **最強** |

**評分規則：** 一個候選要至少一個「強」信號加一個其他信號先入 backlog。得一個「中」信號嘅唔好起。

### 3.2 每個平台喺邊度搵

| 平台 | ① 搜尋缺口 | ② 差評礦 | ③ 論壇 | ④ 付費證據 |
|---|---|---|---|---|
| Shopify | apps.shopify.com 搜尋 autocomplete + 分類頁 app 數 | 每個對手 app 嘅 reviews 頁（公開、可爬） | community.shopify.com、r/shopify | 對手 pricing 頁 + review 數；Upwork "Shopify app" job |
| Chrome | Web Store 搜尋 + 對手 user 數（公開顯示） | Web Store reviews | r/chrome_extensions、目標網站嘅用戶 subreddit（r/AmazonSeller 等） | 對手有冇 Pro plan；ExtensionPay 公開嘅 top 榜 |
| Google Workspace | Marketplace 搜尋；AddonIntel 呢類「gap finder」已經有人做 | Marketplace reviews | r/GoogleAppsScript、r/sheets | 對手 pricing |
| Telegram | 冇 store；睇 channel 訂閱數同 bot 嘅 /start 數（部分公開） | 冇 | crypto／trading group 入面嘅 "anyone has a bot for" | 付費 channel 訂閱價 |

### 3.3 呢個方法本身就係第一個要起嘅嘢：「Radar」

你原本嘅 AY-002（差評挖掘機）唔應該係產品，應該係**你自己嘅需求雷達**：

```
每星期一自動跑（Claude Routine）：
  1. 爬指定平台嘅指定分類（Shopify 營運類、Chrome 特定網站類）
  2. 抽對手 1–3 星評論，用 LLM 歸納成「抱怨句」並計出現次數
  3. 對每個抱怨句計：有冇 autocomplete、對手 review 數、pricing
  4. 出一張排好名嘅表：候選痛點 × 四個信號 × 建議平台 × 建議定價
  5. 你揀，唔係 AI 揀
```

呢個係「用數據講嘢」嘅實體。冇佢，「數據揀 5 個」只係口號。成本：每星期幾蚊美金 LLM 費。**建議做完 AY-004 v1 之後即刻起，甚至平行起。**

---

## 4. 「起 100 個、數據揀 5 個」現唔現實？直接答

### 4.1 有先例，但要睇清楚先例點贏

- Pieter Levels 公開講過起咗約 70 個 project，成功嘅 4 個（Nomad List、Remote OK、PhotoAI、Interior AI）。Marc Lou 起咗 20 幾個。「12 startups in 12 months」係成個 indie 圈嘅傳統。
- **但佢哋嘅贏家全部有一個共通點：同一群受眾（數碼遊牧／獨立開發者），而且流量嚟自佢哋自己嘅 Twitter。** 即係佢哋有自己嘅 Wine-Searcher。你冇，所以你要借平台嘅——呢個就係第 2 節嘅意義。

### 4.2 數字上點樣先叫現實

| 階段 | 你嘅講法 | 現實漏斗 |
|---|---|---|
| 起 | 100 | 100（bot／web 每日 1 個做到；Shopify app 每星期 1 個） |
| 上到架 | — | 30–40（Shopify 審核會 reject 一批，你會放棄一批） |
| 有付費客 | — | 8–12 |
| 有意義收入（> HK$5K MRR） | 5 | 2–4 |
| 帶動大部分收入 | — | 1–2 |

HK$20 萬／月 = US$25K MRR。**一個 Shopify app 做到 US$25K MRR 已經係頭 10%。** 用 3 個贏家夾埋去到，喺 18–24 個月係合理；喺 4 個月唔係。

### 4.3 「數據揀」會喺三個位失效，要預先堵

1. **零推廣嘅 listing 數據全部係零，分唔出邊個好。** Shopify 新 app 冇 review 嘅時候基本冇自然流量。所以每個 app 上架要有一套**固定嘅最低限度 launch**（見 §5），令每個 app 起碼有相同嘅起跑線。否則你量度緊嘅係「邊個 app 我推得多啲」，唔係「邊個有需求」。
2. **砍要真砍。** 平台會 deprecate API（Shopify 每季一版、Chrome Manifest、Apple 每年）。100 個「仲生存」嘅 app 等於每星期有嘢壞。「砍」要等於 unlist + drop schema + 退款，唔係「放喺度唔理」。
3. **需求驗證要喺起之前，唔係之後。** 你講得啱起一個 app 得 2 小時，所以「起咗先睇」睇落好平。但上架、審核、launch、觀察 30 日，每個 app 實際係 6–10 個鐘人手 + 1 個月日曆時間。Radar 先過濾，可以令呢 6–10 個鐘用喺有信號嘅嘢度。

### 4.4 「唔使係專家」—— 同意，加一個邊界

同意：**起**嘅部分唔需要係專家，AI 補晒。但有兩樣嘢 AI 補唔到：

- **判斷 output 啱唔啱。** 一個 Jira 工具出錯，你唔知佢錯；一個庫存工具出錯，你一眼睇到。
- **Support。** 用戶問嘅問題係行業問題，唔係技術問題。

所以修正版原則係：**市場優先，但喺「你判斷得到好壞」嘅市場入面揀。** 電商營運、貿易、庫存、發票、報價、定價——呢啲你判斷得到。Jira 工作流、醫療排程、法律文件——你判斷唔到，就算數據話有需求都排後。呢個唔係「有咩 skill 做咩」，係「有咩眼光做咩」。

---

## 5. 建議嘅執行模型：漏斗 + Radar + 固定 Launch

### 5.1 五個閘

| 閘 | 入閘條件 | 出閘條件 | 時間 |
|---|---|---|---|
| **Radar** | 每週自動掃 | ≥ 1 強信號 + 1 其他信號 | 每週一 |
| **Spec** | 過咗 Radar | Issue 模板填得晒（痛點、邊個俾錢、平台、定價、三個功能、砍掉條件、LLM cap） | 1 小時 |
| **Build** | Spec 有 | v1 三個功能行到；core 接駁（auth／billing／metering） | 1–2 日 |
| **Launch（固定套餐）** | 上到架 | Listing 文案 + 3 張圖；5 個種子用戶（人手搵）；1 個論壇帖；每個 app 一樣 | 2 小時 |
| **Watch** | 上架批准日起計 | 30 日：< 3 付費 → **砍**；60 日：> HK$5K MRR → **谷** | 30–60 日 |
| **Scale** | 過咗 Watch | 獨立域名、內容、廣告、AppSumo、port 去 Wix／BigCommerce、加 MCP 版 | 持續 |

### 5.2 首 20 個 app 嘅平台分配

| 平台 | 數量 | 類型 |
|---|---|---|
| Shopify App Store | 10 | 商家後台營運類（採購、供應商、B2B、庫存對數、發票） |
| Chrome Web Store | 6 | 服務特定 web app 用戶嘅工具（Shopify admin、Amazon Seller、LinkedIn 等） |
| Telegram | 4 | 主線一訊號 + 內部工具（唔計入 AY100 收入） |
| 全部 | 20 | 每個順手出 MCP endpoint |

**點解唔一開始鋪 6 個平台：** 每個平台有自己嘅審核規則、billing API、listing 套路。學一個平台要 2–3 個 app 嘅失敗。同時學 6 個 = 18 個失敗先有第一個成功。先喺 Shopify 學識，贏家再 port。

### 5.3 幾時加第二波平台

| 平台 | 觸發條件 |
|---|---|
| Google Workspace | Radar 喺 Sheets／Gmail 類搵到 ≥ 3 個強信號 |
| Xero／QuickBooks | AY-001 類發票工具喺 Shopify 有付費客 |
| Apple／Google Play | 某個工具嘅用戶主動問「有冇手機版」 ≥ 10 次 |
| Atlassian | 得閒先 |
| ChatGPT apps | 佢哋真係開始俾錢嗰日 |

---

## 6. 呢件事對 AY-000 架構嘅影響（補充上一份文件）

- `packages/core` 要多一個 `shopify` adapter（OAuth、Billing API、GDPR webhooks、App Bridge）—— 因為 10 個 Shopify app 全部用同一套。呢個係 AY-000 真正要「先起」嘅部分，因為 Shopify 審核唔會因為你趕時間而放水。
- `packages/core` 要多一個 `extension` adapter（登入 + Stripe checkout 喺 extension 內嘅標準流程）。
- Radar 係一個獨立 `apps/radar`，用 Claude Routine 每週跑，寫入 `core.radar_signals`。
- 每個 app 嘅 `core.usage_events` 加 `platform` 欄位，等 Watch 閘可以按平台比較。

---

## 7. Repo 狀況同下一步

- 我試過經 GitHub integration 開 `yaupik-crypto/ay100`，**回 403**：呢個 integration 只有 albm-trading 嘅權限，冇開新 repo 嘅權限。要你人手開。
- 建議：**開一個新 GitHub organization 用 AY100 嘅品牌名**，唔好放喺 `yaupik-crypto` 個人帳戶（嗰度有 tmg-inventory、hkcorkage 等，日後有 collaborator 或者 public repo 時會撞）。Private repo 對外係睇唔到嘅，但 org 級分開先係乾淨。
- 開完之後：(1) 喺 claude.ai 嘅 GitHub 設定加呢個 repo 嘅權限；(2) 將 AY100 environment 指向佢；(3) 話我知，我即刻將 `docs/ay100/` 同 `docs/ay100/seed/`（README、CLAUDE.md、.gitignore）搬過去，並開 monorepo 骨架。

---

## 附錄：資料來源

- Shopify 分成同 app 數：https://shopify.dev/docs/apps/launch/distribution/revenue-share · https://uptek.com/shopify-statistics/app-store/ · https://weekonelabs.com/blog/shopify-app-revenue-benchmarks-2026/ · https://www.chargeflow.io/blog/shopify-statistics
- Chrome 收費現狀：https://dodopayments.com/blogs/monetize-chrome-extension · https://crxpay.io/blog/chrome-extension-monetization-models-2026 · https://konabayev.com/blog/extension-monetization-statistics-2026/
- ChatGPT Apps SDK 收費：https://developers.openai.com/apps-sdk/build/monetization · https://venturebeat.com/technology/openai-now-accepting-chatgpt-app-submissions-from-third-party-devs-launches · https://www.wildnetedge.com/blogs/chatgpt-app-monetization
- Atlassian 分成 2026：https://www.atlassian.com/blog/developer/updates-to-marketplace-revenue-share-2026
- Google Workspace add-on 收費：https://mailmeteor.com/blog/monetize-google-workspace-addon · https://addonintel.com/
- AppSumo 分成：https://appsumo.com/blog/breaking-down-appsumo-revenue-share · https://appsumo.com/blog/appsumo-myths
- Vercel Cron：https://vercel.com/changelog/cron-jobs-now-support-100-per-project-on-every-plan
- WhatsApp 收費：https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing

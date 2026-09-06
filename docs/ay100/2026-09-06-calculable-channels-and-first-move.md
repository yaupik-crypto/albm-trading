# AY100 — 「可計算地賺錢」標準：內容平台、Polymarket，同重新定第一步（2026-09-06 補充）

> 用戶回覆：YouTube／IG／Facebook／Polymarket 等等都可以計，**可計算地賺到錢就 OK**。
> 決定：(1) repo 未開；(2) `ay100-core` 批准（已開）；(3) AY-004 可以賣同行但最好唔好；(4) 未定任何 AY 編號，全部可以換。

---

## 0. 結論先行

1. **「可計算」係一個好過「平台」嘅標準。** 佢將 app store、內容平台、預測市場放喺同一把尺上：每個渠道寫得出「單位成本 × 單位收入 × 波動 × 幾耐先知結果 × 容量」先算數。寫唔出嘅唔做。
2. **YouTube／IG／FB 作為收入來源唔可計算，作為 app 嘅發行渠道可計算。** 純 AI 內容頻道 2025-07 起被 YouTube 明文列為不可 monetize，2026-01 一次過封 16 個頻道。但「每個 app 出一條 60 秒 demo 片 + UTM 追蹤到 Stripe」係完全可計算嘅。
3. **Polymarket 有三種可計算策略，兩種唔可計算。** 可計算：流動性獎勵／maker rebate、近確定結果嘅到期收益、跨場價差。唔可計算：方向性預測、長尾偏差收割。香港可以用，但法律係灰色。
4. **AY-004 唔賣同行 = 佢係酒行內部工具 = 佢唔屬於 AY100。** 品牌分隔規則：AY100 唔可以載酒業嘅嘢。AY-004 應該喺 tmg-wms 入面起（WMS 已有 Gemini PO 抽取，係加功能，唔係新 app）。
5. **新嘅第一步：先起兩個「數據收集器」，唔係先起 app。** 因為「可計算」嘅前提係有數據，而數據由你開始收集嗰日先開始累積。

---

## 1. 「可計算」嘅五個變數

任何渠道要入 backlog，填得晒呢五格先算：

| 變數 | 問題 | 例子（Shopify app） | 例子（Polymarket maker） |
|---|---|---|---|
| **單位成本** | 做一個單位要幾多錢＋幾多鐘 | 起 8 鐘 + 審核等 3 週 + LLM US$1/客/月 | 資本 US$X 鎖住 + bot 伺服器 US$5/月 |
| **單位收入** | 一個單位帶幾多錢返嚟 | 一個付費客 HK$300/月 | 每日 rebate ≈ 成交量 × 15–25% taker fee 分成 |
| **波動** | 最好同最差差幾遠 | 中：0 客 到 200 客 | 低（rebate 固定公式）；但 resolution 風險係尾部 |
| **幾耐知結果** | 由開始到知道得唔得 | 上架後 30 日 | 7 日 |
| **容量** | 贏咗可以放大到幾大 | 高（全球商家） | 低–中（受市場流動性同對手 MM 限） |

**評分：** 波動低 + 知結果快 + 容量高 = 優先。任何一格填「唔知」= 唔係可計算，退回 Radar。

---

## 2. 全部渠道放喺同一把尺

| 渠道 | 單位成本 | 單位收入 | 波動 | 知結果 | 容量 | 可計算？ | 角色 |
|---|---|---|---|---|---|---|---|
| **Shopify App Store** | 中（審核） | 月費，平台代收 | 中 | 30–60 日 | 高 | ✅ | AY100 主平台 |
| **Chrome Web Store** | 低 | 月費，自己收 | 中 | 14–30 日 | 高 | ✅ | AY100 副平台 |
| **App 嘅 demo 短片（YouTube／IG Reels／TikTok）** | 極低（AI 生成） | 零直接收入；經 UTM 帶付費客 | 中 | 7–14 日 | 高 | ✅（UTM → Stripe） | **每個 app 嘅標準 launch 動作** |
| **YouTube 純 AI 頻道（廣告收入）** | 低 | RPM US$1–10/千次 | **二元**（隨時封） | 3–6 月 | 高 | ❌ 平台風險唔可計 | 唔做 |
| **YouTube 有人臉／有觀點頻道** | 高（你嘅時間） | 廣告 + affiliate | 中 | 6–12 月 | 高 | ◐ | 你嘅時間唔係「可計算」嘅資源，唔做 |
| **Meta 付費廣告 → 自家 app** | 可量度（CPC） | CAC vs LTV | 低–中 | 7 日 | 高 | ✅（最可計算嘅獲客） | 贏家嘅 Scale 閘用；你已接駁 Meta Ads MCP |
| **IG／FB 自然帳號** | 中 | 零直接 | 高 | 3–6 月 | 中 | ❌ 新帳號觸及率唔可預測 | 唔做 |
| **Affiliate（推第三方產品）** | 低（內容） | EPC × clicks | 中 | 30 日 | 中 | ◐ EPC 可查，流量唔可 | 只做「app 內嘅相關推薦」 |
| **Polymarket：流動性獎勵／maker rebate** | 資本 + bot | 每日派，公式公開 | 低 | 7 日 | 低–中 | ✅ | **主線一第一策略** |
| **Polymarket：近確定結果到期收益** | 資本鎖住 | 例：97¢ → $1 = 3% / 數週 | 低，但有 resolution 尾部風險 | 到期日 | 中 | ✅（要計年化 + 尾部） | 主線一第二策略 |
| **Polymarket ↔ 其他場價差** | bot + 兩邊資本 | 每筆差價 | 低 | 即時 | **低**（bot 秒殺；Kalshi 只限美國，香港用唔到） | ◐ | 研究，唔好期望 |
| **Polymarket：方向性預測** | 資本 | 睇你估得準唔準 | 極高 | 到期日 | 高 | ❌ | 唔做 |
| **Crypto 交易所間 Z-score 配對** | bot + 資本 | 價差回歸 | 中–高 | 日–週 | 中 | ◐ 歷史上可計，今日機構戰場 | 收數據先，唔落單 |

### 2.1 內容平台嘅正確用法

你講 YouTube／IG／FB「可以計」，我同意，但要講清楚**計邊樣**：

- **唔可計嘅係「內容本身賺廣告費」。** YouTube 2025-07-15 起「inauthentic content」政策：AI 配音 + 素材庫 + 模板縮圖 + 人做唔到嘅上載頻率 = 唔 monetize。2026-01 一次封 16 個頻道，合共 3,500 萬訂閱、年收約 US$1,000 萬。呢個係二元風險，唔係波動，計唔到。
- **可計嘅係「內容帶客去 app」。** 每個 app 上架時自動生成一條 60 秒 demo（螢幕錄影 + AI 旁白，成本近零），放 YouTube／IG Reels／TikTok，連結帶 UTM，Stripe 記 `utm_source`。30 日後你知道每條片帶咗幾多付費客。**呢個變成第 5 節「固定 Launch 套餐」嘅一部分**，唔係獨立生意。
- **Meta 付費廣告係最可計算嘅獲客。** CPC 已知、landing 轉換可量、LTV 由 Stripe 算。但只喺 Scale 閘用（app 已證明有人俾錢先買流量），唔喺 Watch 閘用（否則你買緊嘅係假數據）。

### 2.2 Polymarket 嘅正確用法

- **香港可以用。** Polymarket 唔列香港為受限或 close-only 地區（新加坡、英國、法國、德國、澳洲係 close-only）。但香港《賭博條例》下預測市場係灰色；2026-04 特首暫緩籃球博彩合法化時點名預測市場係風險因素。**資本要細、要當佢隨時變 close-only。** 呢個係唯一唔可計嘅變數，用「細注」對沖。
- **最可計嘅係 maker 端。** Maker 零手續費；Maker Rebates 每日派，來源係 taker fee 嘅 15–25%（體育 15%、crypto 20%、其他 25%）；另有 Liquidity Rewards 每日 UTC 零時派畀掛喺中間價附近嘅限價單，**唔使成交都有**。公式公開 = 可以由歷史 orderbook 反推每日預期收益。
- **第二可計嘅係到期收益。** 97¢ 買 → $1 結算 = 3.1%，如果 3 星期到期，年化約 50%+。但要扣：UMA oracle 爭議、市場規則歧義、資本鎖住嘅機會成本。呢個要逐個市場計，唔係一條公式。
- **跨場價差期望要低。** Kalshi 香港用唔到；Polymarket 內部 YES+NO < $1 嘅機會 bot 毫秒級掃走。做研究可以，做主策略唔可以。
- **AY-003 舊定義（Z-score 配對）保留做研究線**，但 v1 唔落單。

---

## 3. 重新定第一步（AY 編號重新 baseline）

用戶確認未定任何 AY 編號，所以以下係新嘅 baseline：

| 編號 | 名 | 類型 | 屬於 | 點解係呢個次序 |
|---|---|---|---|---|
| **AY-000** | Core | 基建 | AY100 | `ay100-core` 已開（ref `dxxcjsqwoamubiwhdady`，ap-southeast-1）。Schema 等 repo 開咗先入 migration |
| **AY-001** | **Radar** | 內部數據收集器 | AY100 | 每週掃 Shopify 營運類 + Chrome 特定網站類，出排名表。**決定第 3 個起嘅 app 係乜** |
| **AY-002** | **Market Tape** | 內部數據收集器 | 主線一 | 每分鐘抄 Polymarket CLOB（orderbook 深度、中間價、成交）+ 主要交易所 funding／spot。**決定 maker 策略嘅預期收益係幾多** |
| **AY-003** | 第一個對外 app | Shopify（預期） | AY100 | **由 AY-001 第一次跑嘅結果揀**，唔係而家揀 |
| **AY-004** | Polymarket maker bot v1 | Telegram 交付 | 主線一 | AY-002 有 2–4 週數據後先起；v1 細注、每日報告、人撳先加注 |
| （移出） | 酒行報價單分析 | 內部工具 | **tmg-wms** | 唔賣同行 = 酒業內部工具 = 唔入 AY100 |

### 3.1 點解先起兩個收集器，唔係先起 app

- **「可計算」需要數據，數據由開始收集嗰日先有。** AY-002 今日開始抄，兩星期後你先計到 maker 策略每日賺幾多。遲一星期開始 = 遲一星期知答案。
- **Radar 決定第 3 至第 20 個 app 係乜。** 冇佢，第 3 個 app 就變返「我覺得」。
- **兩個都係內部、零對外風險、零審核。** 最適合用嚟起 core（schema、bot router、cron、LLM gateway）。
- **兩個都係 1–2 日嘅嘢。** 唔係「先起工廠」；係「先開水喉」。

### 3.2 Radar 第一次跑要掃嘅範圍（種子）

唔係揀 app，係揀「掃邊度」。以下三個係 Shopify 營運類入面數據上稀疏、而你判斷得到好壞嘅範圍：

1. **供應商文件 → Shopify 草稿**（PDF 價目表／發票 → 成本價、庫存草稿，人撳先寫入）
2. **B2B／批發**（報價請求、分級定價、最低訂購量）—— Shopify 原生 B2B 只有 Plus 先有
3. **多倉／庫存對數**（Shopify 庫存 vs 實際、盤點差異）

加 Chrome 兩個範圍：Shopify admin 批量操作、Amazon Seller Central 工具。

Radar 出咗結果，你揀一個，嗰個就係 AY-003。

---

## 4. 固定 Launch 套餐（更新版，加入內容渠道）

每個對外 app 上架時做齊，一樣嘅，2 小時內：

1. Listing 文案 + 3 張圖（AI 生成，人改一次）
2. 60 秒 demo 片 → YouTube + IG Reels + TikTok，UTM 分開
3. 5 個種子用戶（人手搵，唔買）
4. 1 個論壇帖（Shopify Community 或對應 subreddit）
5. MCP endpoint 開埋（免費期權）
6. Stripe `utm_source` 記錄開埋

30 日後 Watch 閘睇嘅唔止係「幾多付費」，仲有「邊條渠道帶嚟」。做到第 10 個 app 你就有數據話「Shopify 自然 vs YouTube demo vs 論壇帖」邊個渠道係你嘅 Wine-Searcher。

---

## 5. 待辦（分邊個做）

| 邊個 | 做乜 | 狀態 |
|---|---|---|
| 用戶 | 開 GitHub org + `ay100` private repo，俾 Claude 權限，AY100 environment 指過去 | 未做 |
| 用戶 | 決定 org／品牌名 | 未做 |
| Claude | repo 一開：搬 docs + seed、起 monorepo、`core` schema migration 入 `ay100-core`、AY-001 Radar spec、AY-002 Market Tape spec | 等 repo |
| Cursor | 照 spec 實作 AY-001、AY-002 | 等 spec |
| 用戶 | Polymarket：開帳戶、細注（建議唔多過你願意當學費嘅數）、USDC on Polygon | 未做 |
| tmg-wms（另一條線） | 酒行報價單分析加入 WMS 現有 PO 抽取流程 | 另開 session |

---

## 附錄：資料來源

- Polymarket maker rebates：https://docs.polymarket.com/market-makers/maker-rebates · https://help.polymarket.com/en/articles/13364471-maker-rebates-program · https://startpolymarket.com/strategies/reward-farming/
- Polymarket 費用 2026：https://startpolymarket.com/learn/polymarket-fees/
- Polymarket 香港：https://startpolymarket.com/countries/hong-kong/ · https://www.datawallet.com/crypto/polymarket-restricted-countries · https://nextpredict.io/legal/asia/
- YouTube inauthentic content：https://air.io/en/monetization/youtube-monetization-policy-changes-2026-a-complete-dated-timeline · https://lenspov.com/articles/youtube-ai-content-demonetization-2026 · https://monetizednow.com/youtube-ai-content-monetization-policy

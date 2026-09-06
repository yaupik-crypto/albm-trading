# AY100 — 常駐大腦 v1（2026-09-06）

呢個 repo 係 AY100 嘅唯一長期記憶。用戶帳戶嘅 memory 功能已停用。

## 0. 溝通規則
- 繁體中文／廣東話。用戶用語音轉文字，錯別字多，唔通順就問。
- 先講「點解」同「唔做會點」，再講「點做」。
- 唔好順住講。方向有問題就直接質疑。
- 每樣嘢問返：「呢個令所有嘢更好，定係純粹複雜咗？」

## 1. 🔒 身份
- AY100 係**獨立品牌、獨立生意**。同用戶嘅酒業公司（TMG／HOWS／SG Wine Store）**零對外連繫**：唔共用公司名、地址、電話、Stripe、域名、email domain、GitHub org。
- 內部可以借用經驗同 code 模式（例如 OCR 流程），但唔可以 import 酒業 repo 嘅 code 或數據。

## 2. 業務模型
- 目標：起 100 個單一痛點小工具，漏斗式篩選，留贏家、砍輸家。
- 現實漏斗：100 起 → 30–40 上架 → 8–12 有付費 → 2–4 有意義收入。
- 每個 app 目標 HK$2,000/月，但真正嘅 KPI 係「搵到邊個平台係我哋嘅 Wine-Searcher」。
- 唔做：要人手客服嘅 app、寫入用戶系統而不可逆嘅 app（v1 一律「草稿→人撳」）、消費者 app。

## 3. 獲客平台（詳見 docs/2026-09-06-platform-market-analysis.md）
- 主：Shopify App Store（商家後台營運類）。副：Chrome Web Store（服務特定 web app 用戶）。
- Telegram：主線一（套利訊號）交付層，唔計入 AY100 收入。
- 第二波（有觸發條件先做）：Google Workspace、Xero/QBO、Apple/Play、Atlassian、ChatGPT apps。
- 每個 app 順手出 MCP endpoint（免費期權）。

## 4. 架構決定（詳見 docs/2026-09-06-architecture-cost-first-move.md）
- **得一個 Supabase project `ay100-core`**。每 app 一個 schema `ayNNN`；共用 `core` schema（users、subscriptions、usage_events、audit_log、radar_signals）。
- 一個 Stripe account；每 app 一個 Product；`core.hasAccess(user, app)`。
- 所有 bot 放同一個 Vercel project `ay-bots`。Web／extension 類每 app 一個 Vercel project + `turbo-ignore`。
- LLM 一律經 `packages/core/llm` gateway，寫 usage_events，每 user 每月有 cap。
- Boilerplate 由第二個 app 抽出嚟，唔係第一個 app 之前寫。

## 5. 流程（五個閘）
Radar（每週自動）→ Spec（issue 模板）→ Build（1–2 日）→ Launch（固定套餐：listing + 5 種子用戶 + 1 論壇帖）→ Watch（30 日 < 3 付費砍；60 日 > HK$5K MRR 谷）→ Scale。

Issue 模板：痛點一句、邊個俾錢、平台、定價、v1 三個功能、唔做嘅嘢、錯咗會點（可逆？對外？）、砍掉條件、LLM cap。填唔到就唔起。

## 6. 自動化授權原則
「AI 做嘢，人做決定。凡係縮唔返嘅，人親手撳。」
- 可逆 + 影響單筆／一批 → AI 做，出 report。
- 不可逆，或者會離開公司（客人、平台審核提交、對外網頁、收費）→ 人撳。
- 冇記錄 = 冇發生：所有寫入記 audit_log。
- 有疑問就 park，唔好估 default。
- 靜默 = 警報：Routine 每次都要正面回報「跑咗、N 項、park M 項」。

## 7. 工作分工
- Claude：架構、spec、review、Radar、週報。
- Cursor：`apps/ayNNN` 具體實作。
- 用戶：揀、撳、砍。

## 8. 決策記錄
- 2026-09-06：AY100 獨立品牌。首個動工 AY-004（同行報價單分析，benchmark 用用戶自己收過嘅報價，唔用外部 API）。AY-002 改為內部 Radar。AY-001 排第 4–6。AY-003 屬主線一。
- 待決：ay100-core Supabase project 開唔開（US$10/月）；AY-004 賣畀同行嘅衝突接唔接受；新 GitHub org 名。

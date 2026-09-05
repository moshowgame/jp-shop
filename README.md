# SUPERDREAM 超级梦想 ・ 金晟积木

> 任意組合・無限延展 ・ 中國積木潮玩微縮夢幻屋。
> 一個基於 **jQuery 3 + Bootstrap Icons** 的純靜態、中日雙語、日系畫報風格商品展示網站。**無購物車、無價格**，僅通過 LINE / 微信二維碼聯繫客服。

![status](https://img.shields.io/badge/status-static-success)
![tech](https://img.shields.io/badge/jQuery-3.7.x-blue)
![style](https://img.shields.io/badge/style-和風畫報-b02a25)
![lang](https://img.shields.io/badge/lang-中文%20%7C%20日本語-9a7b3f)

---

## ✨ 項目簡介

**SUPERDREAM 超级梦想** 展示金晟積木（中國潮玩）兩大產品系列，每系列包含三大主題產品線。全站以日系雜誌畫報風格呈現：和紙底色、朱紅印章、豎排點綴文字、大幅商品海報圖。顧客看中喜歡的款式後，掃碼添加 LINE / 微信並告知「系列 + 風格」即可。

## 🛍️ 產品結構（兩系列 × 三主題）

| 系列 | 主題 | 圖集 ID | 圖數 |
|------|------|---------|------|
| A 系列 · 夢想立方第一季 | 樱花物語 さくら物語 | `a-japan` | 4 |
| A 系列 | 走過咖啡屋 コーヒーショップ | `a-coffee` | 3 |
| A 系列 | 夜空中最亮的星 星空の物語 | `a-starry` | 3 |
| B 系列 · 超級夢想第一季 | 日本風 和風スタイル | `b-japan` | 2 |
| B 系列 | 星語心願 星の願い | `b-starry` | 1 |
| B 系列 | 阿莫爾咖啡店 カフェ・アムール | `b-coffee` | 1 |

## 🧭 頁面與流程

```
index.html（首頁：Hero + A/B 系列區塊 + 主題卡片）
   └─ 點擊主題卡片 → product.html?c=<圖集ID>（大幅海報圖集，日式序號壱弐参…）
                      └─ 點擊「聯繫客服」→ contact.html?c=<圖集ID>
                          （顯示諮詢上下文：系列 + 風格 + 示例話術
                            「我想要 A 系列的樱花物语」，附 LINE / 微信二維碼）
```

- 語言：默認繁體中文；`?lang=ja` 或點擊右上角按鈕切換日文（`jp.html` 為日文入口，自動跳轉 `index.html?lang=ja`）。
- 語言狀態存於 `localStorage`（`superdream_lang`），跨頁保留。

## 📂 目錄結構

```
jp-shop/
├── index.html              # 首頁
├── product.html            # 主題圖集頁（?c=xxx）
├── contact.html            # 聯繫頁（?c=xxx 可選上下文）
├── jp.html                 # 日文入口（跳轉）
├── doc/                    # 原始物料（doc/a、doc/b 兩系列圖冊）
└── assets/
    ├── css/style.css       # 和風畫報樣式（紙色 / 墨色 / 朱紅）
    ├── js/
    │   ├── data.js         # 系列 + 圖集數據（無價格、無規格）
    │   ├── i18n.js         # 中日雙語文案
    │   ├── home.js         # 首頁渲染
    │   └── product.js      # 圖集頁渲染
    └── images/
        ├── logo.svg        # 日式 Logo（円相 + 帆 + 金字）
        ├── line-qr.jpg     # LINE 二維碼
        ├── wechat-qr.jpg   # 微信二維碼（日本 大阪市・張先生）
        └── products/       # 各主題海報圖（a-japan-1.jpg 等）
```

## 🚀 快速開始

```bash
cd /path/to/jp-shop
python -m http.server 8080
# 訪問 http://localhost:8080/
```

（直接雙擊 index.html 也可，但 Google Fonts 等 CDN 在 file:// 下可能受限。）

## 🎨 設計系統

| 變量 | 顏色 | 用途 |
|------|------|------|
| `--paper` | `#f6f2e9` | 和紙底色 |
| `--ink` | `#26221a` | 墨色文字 |
| `--vermilion` | `#b02a25` | 朱紅（印章・強調） |
| `--gold` | `#9a7b3f` | 金茶（輔助） |

字體：標題 **Noto Serif JP/SC**（明朝體），正文 **Noto Sans JP/SC**。

## 🔧 自定義

- **替換二維碼**：直接覆蓋 `assets/images/line-qr.jpg` 與 `wechat-qr.jpg`。
- **新增主題 / 商品圖**：編輯 `assets/js/data.js` 的 `collections` 數組，每個圖集包含 `id / series / name / nameJa / sub / subJa / cover / images[]`；圖片放入 `assets/images/products/`。
- **新增系列**：在 `seriesList` 添加，並在 `index.html` 增加對應區塊與 `theme-grid` 容器。

## 👤 品牌

**金晟（JINSHENG）** — 中國積木潮玩品牌
> **DARE TO LOVE, DARE TO FIGHT, DARE TO DREAM**

## 📝 許可

僅供展示使用。產品圖片版權歸金晟所有。

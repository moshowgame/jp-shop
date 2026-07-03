# 匠物 ・ 日系生活好物

> 侘寂美學、手作溫度、日常儀式感。  
> 一個基於 **jQuery 3 + Bootstrap 5** 的純靜態移動端購物展示網站。

![status](https://img.shields.io/badge/status-static-success)
![tech](https://img.shields.io/badge/jQuery-3.7.x-blue)
![tech](https://img.shields.io/badge/Bootstrap-5.3.x-purple)

---

## ✨ 項目簡介

「匠物」(TAKUMI) 是一個展示性質的日系生活好物網站，預置 10 款商品、4 大分類，每款商品擁有獨立詳情頁。客服與下單引導採用 **獨立聯繫頁**（`contact.html`），展示支付寶 / 微信支付二維碼，並提供 Email、Instagram、Facebook 等其他方式，**無在線支付功能**。

## 👤 作者介紹

**Moshow（鄭鍇）** — 熱愛技術與分享的 **Technical Lead × 數據科學家 × SpringBoot 專家**

> 🏆 **CSDN 博客之星 2025 年度 TOP100** ｜ ⭐ **GitHub 4K stars**

### 🔗 社交主頁

| 平台 | 鏈接 |
|------|------|
| GitHub | [moshowgame](https://github.com/moshowgame) |
| CSDN | [zhengkai.blog.csdn.net](https://zhengkai.blog.csdn.net/) |

### 🏅 權威認證

- ☁️ **GCA** — 谷歌雲架構師認證
- 🧠 **Neo4j Data Scientist** — Neo4j 數據科學家認證
- ☁️ **阿里雲 ACP** — 阿里雲認證
- 🏢 **金蝶高級 CRM / 供應鏈工程師** 認證
- 📋 **PMP** — 項目管理認證
- 📋 **CSPM** — 項目管理專業人員能力評價認證
- 🤖 **廣東省人工智能訓練師** 認證

### 💬 關於我

長期深耕企業級後端架構、數據治理與雲原生領域，活躍於開源社區，歡迎技術交流與合作。

---

## 🛠️ 技術棧

| 類別 | 選型 | 來源 |
|------|------|------|
| HTML | HTML5 語義化標籤 | — |
| CSS | 自定義主題 + CSS 變量 | `assets/css/style.css` |
| UI 框架 | Bootstrap 5.3.x | CDN |
| 圖標 | Bootstrap Icons 1.11 | CDN |
| JS 庫 | jQuery 3.7.1 | CDN |
| 二維碼 | 靜態圖片（支付寶 / 微信） | `assets/images/*.jpg` |
| 字體 | Noto Serif/Sans SC、Noto Serif JP、Klee One | Google Fonts |
| 後端 | 無 | — |
| 數據 | JS 對象（mock） | `assets/js/data.js` |

## 📂 目錄結構

```
jp-shop/
├── index.html              # 首頁：Hero + 分類 + 商品網格
├── product.html            # 詳情頁模板（?id=xxx）
├── contact.html            # 聯繫頁：支付寶/微信 QR + 其他方式
├── assets/
│   ├── css/
│   │   └── style.css       # 主題樣式（侘寂配色、字體、動效）
│   ├── js/
│   │   ├── data.js         # 10 款商品 + 4 個分類 mock 數據
│   │   ├── home.js         # 首頁渲染與分類切換
│   │   └── product.js      # 詳情頁渲染與交互
│   └── images/
│       ├── alipay-qr.jpg   # 支付寶二維碼（contact 頁使用）
│       └── wechat-qr.jpg   # 微信支付二維碼（contact 頁使用）
└── .trae/
    └── documents/
        ├── PRD.md          # 產品需求文檔
        └── TECH.md         # 技術架構文檔
```

## 🚀 快速開始

### 方式一：Python（推薦）
```bash
cd /home/moshow/workspace/html/jp-shop
python3 -m http.server 8080
```
訪問 [http://localhost:8080/](http://localhost:8080/)

### 方式二：Node
```bash
npx serve .
```

### 方式三：直接打開
雙擊 `index.html` 即可（部分 CDN 在 `file://` 協議下可能受瀏覽器安全策略限制，建議使用本地服務器）。

## 🧭 路由說明

| 路由 | 說明 |
|------|------|
| `/` 或 `/index.html` | 首頁：Hero、分類切換、商品瀑布流 |
| `/product.html?id=p01` | 商品詳情頁（id 為 `p01` ~ `p10`） |
| `/product.html?id=invalid` | 空狀態頁，提供返回首頁鏈接 |
| `/contact.html` | 聯繫頁：支付寶 / 微信二維碼 + Email / IG / FB |

頁面間跳轉：客服入口、詳情頁「立即購買 / 聯繫店鋪」、底部導航統一跳轉到 `contact.html`。

## 🛍️ 商品清單

| ID | 名稱 | 日文 | 分類 | 價格 |
|----|------|------|------|------|
| p01 | 宇治抹茶套裝 | 宇治抹茶セット | 茶器・餐具 | ¥168 |
| p02 | 櫻花和菓子禮盒 | 桜の和菓子詰合せ | 食・甜點 | ¥128 |
| p03 | 招財貓擺件 | 招き猫 | 居家・擺件 | ¥98 |
| p04 | 漆金筷組 | 漆塗り金箸 | 茶器・餐具 | ¥88 |
| p05 | 富士山玻璃杯 | 富士グラス | 茶器・餐具 | ¥78 |
| p06 | 江戶風鈴 | 風鈴 | 居家・擺件 | ¥68 |
| p07 | 和紋手帕 | 和柄ハンカチ | 文房・手作 | ¥38 |
| p08 | 旅人手帳 | 旅の手帳 | 文房・手作 | ¥158 |
| p09 | 折紙禮盒 | 折り紙セット | 文房・手作 | ¥58 |
| p10 | 抹茶毛巾布 | 抹茶タオル | 居家・擺件 | ¥48 |

## 🎨 設計系統

### 配色
| 變量 | 顏色 | 用途 |
|------|------|------|
| `--color-ink` | `#1a1a1a` | 主文字・主按鈕 |
| `--color-paper` | `#faf7f2` | 背景（和紙白） |
| `--color-vermilion` | `#b94a48` | 強調・CTA（朱紅） |
| `--color-matcha` | `#7a8a7a` | 次要強調（抹茶綠） |
| `--color-sand` | `#d6cfc4` | 邊框・分隔線（砂金） |

### 字體
- 中文標題：**Noto Serif SC**（襯線）
- 中文正文：**Noto Sans SC**（無襯線）
- 日文副標：**Noto Serif JP**（明朝體）
- 點綴文字：**Klee One**（手寫風）

## ⚙️ 關鍵交互

| 功能 | 實現 |
|------|------|
| 分類切換 | 點擊 chip → `getByCategory(key)` → 重新渲染網格（fade 動畫） |
| 詳情頁路由 | `URLSearchParams` 讀取 `?id=` → `getById()` 填充 DOM |
| 圖片畫廊 | 點擊縮略圖切換主圖（淡入淡出） |
| 購買 / 聯繫 | 跳轉至 `contact.html`，展示支付寶 / 微信 QR |
| 底部客服導航 | 跳轉至 `contact.html` |

## 🔧 自定義配置

### 替換二維碼
直接替換 `assets/images/` 下的 `alipay-qr.jpg` 和 `wechat-qr.jpg` 即可。建議尺寸 600×800（豎向），格式 jpg / png，保持寬高比 3:4 視覺效果最佳。

### 新增 / 修改商品
編輯 [assets/js/data.js](assets/js/data.js) 中的 `products` 數組，遵循結構：
```js
{
  id: 'p11',
  name: '商品名稱',
  nameJa: '日本語名',
  category: 'tea',         // tea | craft | home | food
  categoryName: '茶器・餐具',
  price: 100,
  cover: imageUrl('...', 'portrait_4_3'),
  images: [imageUrl('...', 'square'), ...],
  material: '材質',
  size: '尺寸',
  origin: '產地',
  description: '<p>...</p>',
  tags: ['標籤1', '標籤2']
}
```

### 替換圖片
圖片默認使用 `text_to_image` API 動態生成（無需本地存儲）。如需使用本地圖片：
```js
// data.js
cover: 'assets/images/p11-cover.jpg'
```

## 📱 瀏覽器兼容

- ✅ iOS Safari 14+
- ✅ Android Chrome 90+
- ✅ Desktop Chrome / Edge / Firefox / Safari
- ❌ IE（不支持）

## 📄 相關文檔

- [PRD.md](.trae/documents/PRD.md) — 產品需求文檔
- [TECH.md](.trae/documents/TECH.md) — 技術架構文檔

## 📝 許可

僅供學習與展示使用。商品圖片由 AI 生成，版權歸圖像生成方所有。

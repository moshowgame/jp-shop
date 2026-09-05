# SUPERDREAM 超级梦想 ・ 金晟积木

> 任意組合・無限延展 ・ 中國積木潮玩微縮夢幻屋。  
> 一個基於 **jQuery 3 + Bootstrap 5** 的純靜態移動端展示網站。

![status](https://img.shields.io/badge/status-static-success)
![tech](https://img.shields.io/badge/jQuery-3.7.x-blue)
![tech](https://img.shields.io/badge/Bootstrap-5.3.x-purple)
![brand](https://img.shields.io/badge/brand-金晟-ec5b2c)

---

## ✨ 項目簡介

**SUPERDREAM 超级梦想** 是金晟积木（中國潮玩）旗下的微縮積木屋系列，包含 **A 系列・極致奢華版** 與 **B 系列・第一季** 兩大產品線，主題涵蓋「櫻花物語」「夜空中最亮的星」「走過咖啡屋」「北國之春」等。所有產品支持「任意組合・無限延展」，顧客可通過 LINE / 微信與客服聯繫下單，**無在線支付功能**。

## 🛍️ 產品系列

### A 系列 · 極致奢華版
| ID | 名稱 | 主題 | 價格 |
|----|------|------|------|
| a-01 | 樱之歌 SAKURA SONG | 樱花物语 | ¥268 |
| a-02 | 开运屋 LUCKY HOUSE | 樱花物语 | ¥258 |
| a-03 | 樱之恋 SAKURA'S LOVE | 樱花物语 | ¥288 |
| a-04 | 星语 STAR WHISPERS | 夜空中最亮的星 | ¥298 |
| a-05 | 星愿 STAR WISHES | 夜空中最亮的星 | ¥298 |
| a-06 | 快乐起啡 HAPPY COFFEE | 走过咖啡屋 | ¥278 |
| a-07 | 啡黄腾达 HAPPY COFFEE PRO | 走过咖啡屋 | ¥318 |

### B 系列 · 第一季
| ID | 名稱 | 主題 | 價格 |
|----|------|------|------|
| b-01 | 樱花树下的约定 | 日本风 | ¥198 |
| b-02 | 北国之春 | 日本风 | ¥198 |
| b-03 | 星语心愿 | 星空风 | ¥218 |
| b-04 | 莫奈咖啡店 | 咖啡风 | ¥228 |

> 完整圖冊見 [doc/SUPERDREAM-A系列.pdf](doc/SUPERDREAM-（A系列).pdf) 與 [doc/SUPERDREAM-B系列.pdf](doc/SUPERDREAM-（B系列).pdf)。

## 👤 品牌

**金晟（JINSHENG）** — 中國積木潮玩品牌

> 🏆 設計理念：萬像潮趣世界，構建你心中永不關門的童話小鎮。  
> ✨ 品牌口號：**DARE TO LOVE, DARE TO FIGHT, DARE TO DREAM**

### 🔗 客服與聯繫

| 渠道 | 鏈接 |
|------|------|
| LINE 官方賬號 | 掃碼 [doc/line.jpg](doc/line.jpg) 或 `assets/images/line-qr.jpg` |
| 微信 WeChat | 掃碼 [doc/wechat.jpg](doc/wechat.jpg) 或 `assets/images/wechat-qr.jpg`（張先生・日本 大阪市） |

## 🛠️ 技術棧

| 類別 | 選型 | 來源 |
|------|------|------|
| HTML | HTML5 語義化標籤 | — |
| CSS | 自定義主題 + CSS 變量 | `assets/css/style.css` |
| UI 框架 | Bootstrap 5.3.x | CDN |
| 圖標 | Bootstrap Icons 1.11 | CDN |
| JS 庫 | jQuery 3.7.1 | CDN |
| 二維碼 | 靜態圖片（LINE / 微信） | `assets/images/*.jpg` |
| 字體 | Noto Serif/Sans SC、Noto Serif JP、Klee One | Google Fonts |
| 後端 | 無 | — |
| 數據 | JS 對象（mock） | `assets/js/data.js` |

## 📂 目錄結構

```
jp-shop/
├── index.html              # 首頁：Hero + 系列切換 + 商品網格
├── product.html            # 詳情頁模板（?id=xxx）
├── contact.html            # 聯繫頁：LINE/微信 QR + 品牌信息
├── doc/                    # 物料目錄
│   ├── SUPERDREAM-（A系列).pdf
│   ├── SUPERDREAM-（B系列).pdf
│   ├── logo.jpg            # 金晟 Logo
│   ├── line.jpg            # LINE 二維碼
│   └── wechat.jpg          # 微信二維碼
└── assets/
    ├── css/
    │   └── style.css       # 主題樣式（SUPERDREAM 橙色、字體、動效）
    ├── js/
    │   ├── data.js         # 11 款商品 + 6 個分類 mock 數據
    │   ├── home.js         # 首頁渲染與分類切換
    │   └── product.js      # 詳情頁渲染與交互
    └── images/
        ├── logo.jpg        # 金晟 Logo
        ├── line-qr.jpg     # LINE 二維碼（contact 頁）
        ├── wechat-qr.jpg   # 微信二維碼（contact 頁）
        ├── catalog-a.jpg   # A 系列完整圖冊
        ├── catalog-b.jpg   # B 系列完整圖冊
        ├── alipay-qr.jpg   # 歷史預留
        └── products/       # 各產品場景裁切圖
            ├── a-01-sakura-song.jpg
            ├── a-02-lucky-house.jpg
            ├── ...
            └── b-04-monet-coffee.jpg
```

## 🚀 快速開始

### 方式一：Python（推薦）
```bash
cd /path/to/jp-shop
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
| `/` 或 `/index.html` | 首頁：Hero、系列切換、商品瀑布流 |
| `/product.html?id=a-01` | 商品詳情頁（id 為 `a-01` ~ `a-07`、`b-01` ~ `b-04`） |
| `/product.html?id=invalid` | 空狀態頁，提供返回首頁鏈接 |
| `/contact.html` | 聯繫頁：LINE / 微信二維碼 + 品牌信息 |

頁面間跳轉：客服入口、詳情頁「立即購買 / 聯繫客服」均跳轉到 `contact.html`。

## 🎨 設計系統

### 配色
| 變量 | 顏色 | 用途 |
|------|------|------|
| `--color-ink` | `#1f1a17` | 主文字・主按鈕 |
| `--color-paper` | `#fdf8f1` | 背景（米白） |
| `--color-primary` | `#ec5b2c` | 主強調・CTA（SUPERDREAM 橙） |
| `--color-primary-dark` | `#c84518` | 按鈕 hover |
| `--color-primary-soft` | `#fce0d0` | 標籤・背景漸層 |
| `--color-series-a` | `#ec5b2c` | A系列徽章（橙） |
| `--color-series-b` | `#5aa9c9` | B系列徽章（藍） |
| `--color-line` | `#ece4d3` | 邊框・分隔線 |

### 字體
- 中文標題：**Noto Serif SC**（襯線）
- 中文正文：**Noto Sans SC**（無襯線）
- 日文副標：**Noto Serif JP**（明朝體）
- 點綴文字：**Klee One**（手寫風）

## ⚙️ 關鍵交互

| 功能 | 實現 |
|------|------|
| 系列 / 主題切換 | 點擊 chip → `getByCategory(key)` → 重新渲染網格（fade 動畫） |
| 詳情頁路由 | `URLSearchParams` 讀取 `?id=` → `getById()` 填充 DOM |
| 圖片畫廊 | 點擊縮略圖切換主圖（淡入淡出） |
| 購買 / 聯繫 | 跳轉至 `contact.html`，展示 LINE / 微信 QR |
| 底部客服導航 | 跳轉至 `contact.html` |

## 🔧 自定義配置

### 替換二維碼
直接替換 `assets/images/` 下的 `line-qr.jpg` 和 `wechat-qr.jpg` 即可。建議尺寸 600×600（正方形），格式 jpg / png。

### 新增 / 修改商品
編輯 [assets/js/data.js](assets/js/data.js) 中的 `products` 數組，遵循結構：
```js
{
  id: 'a-08',                          // 唯一 id
  name: '新商品',
  nameJa: 'NEW PRODUCT',
  series: 'A',                          // A | B
  seriesName: 'A系列 · 极致奢华版',
  category: 'sakura',                   // sakura | starry | coffee | ...
  categoryName: '樱花物语',
  price: 268,
  cover: 'assets/images/products/a-08-combo.jpg',
  images: ['assets/images/products/a-08-combo.jpg'],
  material: '木质 / 亚克力',
  size: '约 17 × 15 × 19 cm',
  origin: '中国 · 金晟原创',
  description: '<p>商品介绍...</p>',
  tags: ['樱花', '新系列']
}
```

### 替換產品圖
將新圖片放入 `assets/images/products/` 並在 `data.js` 中引用。建議裁切為豎向比例（3:4 或 4:5），解析度 ≥ 1182 × 1500。

## 📱 瀏覽器兼容

- ✅ iOS Safari 14+
- ✅ Android Chrome 90+
- ✅ Desktop Chrome / Edge / Firefox / Safari
- ❌ IE（不支持）

## 📄 相關文檔

- [doc/SUPERDREAM-（A系列).pdf](doc/SUPERDREAM-（A系列).pdf) — A 系列產品圖冊
- [doc/SUPERDREAM-（B系列).pdf](doc/SUPERDREAM-（B系列).pdf) — B 系列產品圖冊
- [doc/logo.jpg](doc/logo.jpg) — 金晟品牌 Logo

## 📝 許可

僅供展示使用。產品圖片版權歸金晟所有。

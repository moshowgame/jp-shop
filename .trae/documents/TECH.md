# 技術架構文檔：匠物 — 日系生活好物

## 1. 架構設計

```mermaid
flowchart LR
    subgraph Client[瀏覽器 - 純靜態]
        HTML[HTML 頁面]
        CSS[Bootstrap 5 + 自定義 CSS]
        JS[jQuery 3 + 自定義腳本]
        IMG[靜態 QR 圖片]
    end
    HTML --> CSS
    HTML --> JS
    HTML -->|contact.html| IMG
    JS -->|location.href| Contact[contact.html]
```

採用純前端多頁架構：使用 jQuery 控制頁面跳轉與數據渲染，無後端，無構建工具。客服與下單引導改為獨立頁面 `contact.html`，二維碼以靜態圖片提供，無需 js 動態生成。

## 2. 技術棧

- **HTML5**：語義化標籤
- **CSS3**：自定義樣式 + CSS 變量
- **Bootstrap 5.3.x**（CDN）：柵格、工具類、Modal 組件
- **Bootstrap Icons**（CDN）：UI 圖標
- **jQuery 3.7.x**（CDN）：DOM 操作、事件
- **字體（CDN / Google Fonts）**：Noto Serif SC / Noto Sans SC / Noto Serif JP / Klee One
- **二維碼**：靜態圖片（`assets/images/alipay-qr.jpg`、`wechat-qr.jpg`）
- **後端**：無
- **數據庫**：無，使用 JS 對象作為 mock 數據

## 3. 路由定義

| 路由 | 文件 | 說明 |
|------|------|------|
| `/` 或 `/index.html` | index.html | 首頁：Hero + 分類 + 商品網格 |
| `/product.html?id=p01` | product.html | 商品詳情頁，根據 `id` 查詢 mock 數據 |
| `/contact.html` | contact.html | 聯繫頁：支付寶 / 微信 QR + 其他聯繫方式 |

頁面間跳轉使用原生 `?id=xxx` 查詢參數，jQuery 讀取 `location.search` 渲染對應商品；客服入口、詳情頁 CTA 統一跳轉至 `contact.html`。

## 4. 目錄結構

```
jp-shop/
├── index.html                  # 首頁
├── product.html                # 詳情頁模板
├── contact.html                # 聯繫頁（支付寶/微信 QR + 其他方式）
├── assets/
│   ├── css/
│   │   └── style.css           # 自定義主題
│   ├── js/
│   │   ├── data.js             # 商品 mock 數據
│   │   ├── home.js             # 首頁邏輯
│   │   └── product.js          # 詳情頁邏輯
│   └── images/
│       ├── alipay-qr.jpg       # 支付寶二維碼
│       ├── wechat-qr.jpg       # 微信二維碼
│       └── (生成式商品圖)
└── .trae/
    └── documents/
        ├── PRD.md
        └── TECH.md
```

## 5. 數據模型

### 5.1 商品對象結構

```js
{
  id: 'p01',                       // 唯一標識
  name: '宇治抹茶套裝',            // 中文名
  nameJa: '宇治抹茶セット',         // 日文名
  category: 'tea',                 // 分類 key
  categoryName: '茶器・餐具',       // 分類顯示名
  price: 168,                      // 價格（元）
  cover: 'assets/images/p01-cover.jpg',
  images: [                        // 詳情圖
    'assets/images/p01-1.jpg',
    'assets/images/p01-2.jpg',
    'assets/images/p01-3.jpg'
  ],
  material: '陶器 / 竹',            // 材質
  size: '茶碗 8cm / 茶筅 10cm',     // 尺寸
  origin: '日本・宇治',             // 產地
  description: '…',                // 詳情描述（HTML）
  tags: ['手作', '限定']            // 標籤
}
```

### 5.2 分類枚舉

| key | 顯示名 |
|-----|--------|
| all | 全部 |
| tea | 茶器・餐具 |
| craft | 文房・手作 |
| home | 居家・擺件 |
| food | 食・甜點 |

## 6. 關鍵交互實現

### 6.1 客服 / 下單引導（聯繫頁）

- 點擊「立即購買」「聯繫店鋪」或底部客服導航 → `location.href = 'contact.html'`
- `contact.html` 展示支付寶 / 微信支付二維碼（靜態 jpg，無需 js 生成）
- 提供 Email / Instagram / Facebook 等其他聯繫方式
- 使用 CSS `flex` 與 `max-width` 確保 QR 圖片自適應移動端

### 6.2 商品詳情渲染

- `product.html?p01` 加載時 `product.js` 讀取 `id` → 從 `data.js` 查找 → 動態填充 DOM
- 缺貨或 id 不存在 → 顯示空狀態並提供返回首頁鏈接

### 6.3 分類切換

- 點擊 chip → 更新 `active` 樣式 → 重新過濾商品數組 → 重新渲染網格
- 動畫：fade-out 150ms → 替換 DOM → fade-in 200ms

### 6.4 「本期甄選」欄目適配

- `.chip-bar` 使用 `flex-wrap: wrap` 替代 `overflow-x: auto`
- 欄目按容器寬度自動換行，保證全部可見，避免 mobile 端被截斷
- `@media (max-width: 380px)` 微調內邊距與字號，優化極窄屏體驗

## 7. 性能與可訪問性

- 所有外部資源使用 CDN，支持緩存
- 圖片使用生成式 API，size 控制在合理範圍
- ARIA：按鈕 `aria-label`，返回按鈕焦點管理
- 觸摸目標 ≥ 44×44px
- 動效使用 `prefers-reduced-motion` 降級

## 8. 瀏覽器兼容

- iOS Safari 14+
- Android Chrome 90+
- 不支持 IE

## 9. 本地預覽

使用 Python 或 Node 啟動靜態服務器：

```bash
# 任選其一
python3 -m http.server 8080
npx serve .
```

訪問 `http://localhost:8080/`。

## 10. 維護要點

| 場景 | 操作 |
|------|------|
| 更換支付二維碼 | 替換 `assets/images/alipay-qr.jpg` 或 `wechat-qr.jpg` |
| 新增聯繫方式 | 編輯 `contact.html` 的 `.contact-actions` 區塊 |
| 調整聯繫頁樣式 | 編輯 `assets/css/style.css` 的「聯繫頁」section |
| 修改欄目 | 編輯 `index.html` 的 `.chip-bar`，`.contact-card` 等 |

/**
 * SUPERDREAM 超级梦想 — 国际化文案
 */
window.JP_SHOP_I18N = (function () {
  const dict = {
    zh: {
      ui: {
        back: '返回',
        askShort: '咨询',
        ctaBtn: '聯 繫 客 服',
        // 首页
        heroSub: '中國積木潮玩 ・ 任意組合 無限延展',
        seriesATitle: '夢想立方 ・ 第一季',
        seriesBTitle: '超級夢想 ・ 第一季',
        seriesADesc: '亞克力防塵罩立方體 ・ 自由堆疊',
        seriesBDesc: '玻璃陽光房大場景 ・ 一屋即一世界',
        comboNote: '任 意 組 合 ・ 無 限 延 展',
        // 图集页
        galleryCtaTitle: '想要這一款嗎？',
        galleryCtaLead: '掃碼聯繫客服，告知您想要的系列與風格即可',
        // 联系页
        contactTitle: '聯 繫 我 們',
        ctxKicker: '您 正 在 諮 詢',
        ctxHint: '添加好友後，直接告知客服即可',
        qrSectionTitle: '掃 碼 添 加 好 友',
        lineDesc: '掃碼添加 LINE 好友 ・ 獲取最新產品資訊',
        wechatDesc: '日本 大阪市 ・ 張先生',
        guideTitle: '購 買 方 式',
        guideText: '長按或截圖保存二維碼，打開對應 APP 掃描添加好友。<br>添加後發送您想要的「系列 + 風格」即可：',
        // 公司介绍
        companyTagline: '連接日本與海外市場的綜合貿易及數字服務企業',
        companyP1: '株式会社金晟以大阪為基地，主要開展日本及海外商品的採購、進出口、代理、批發零售及跨境EC業務。',
        companyP2: '我們一方面將日本優質商品推廣至海外市場，另一方面代理海外優質產品，致力於開拓日本市場，建立銷售渠道與品牌推廣體系。',
        companyP3: '同時，公司提供Web網站製作、EC運營、SNS運營、廣告營銷及品牌設計等數字化服務，為國內外企業提供從市場開拓、商品銷售到品牌推廣的一站式支持。',
        companyAddress: '〒542-0062（邮编）大阪府大阪市中央区上本町西一丁目1-9 ハイマート上町 501',
      }
    },
    ja: {
      ui: {
        back: '戻る',
        askShort: '相談',
        ctaBtn: 'お 問 い 合 わ せ',
        // ホーム
        heroSub: '中國ブロック・トレンディ玩具 ・ 自由に組み合わせ 無限に拡張',
        seriesATitle: 'ドリームキューブ ・ 第1シーズン',
        seriesBTitle: 'スーパードリーム ・ 第1シーズン',
        seriesADesc: 'アクリルケース付きキューブ ・ 自由に積み重ね',
        seriesBDesc: 'ガラスサンルームの大きなシーン ・ 一つの家が一つの世界',
        comboNote: '自 由 に 組 み 合 わ せ ・ 無 限 に 拡 張',
        // ギャラリー
        galleryCtaTitle: 'こちらがお好きですか？',
        galleryCtaLead: 'QRコードからサポートに連絡して、欲しいシリーズとスタイルをお知らせください',
        // お問い合わせ
        contactTitle: 'お 問 い 合 わ せ',
        ctxKicker: 'お 問 い 合 わ せ 中',
        ctxHint: '友達追加後、そのままスタッフにお伝えください',
        qrSectionTitle: 'QR コ ー ド で 友 達 追 加',
        lineDesc: 'QRコードをスキャンしてLINE友達追加 ・ 最新情報をお届け',
        wechatDesc: '日本・大阪市 ・ 張様',
        guideTitle: '購 入 方 法',
        guideText: 'QRコードを長押しまたはスクリーンショット保存して、各アプリでスキャンしてください。<br>友達追加後、「シリーズ + スタイル」を送るだけ：',
        // 会社案内
        companyTagline: '日本と海外をつなぐ、総合ビジネスサービス企業',
        companyP1: '株式会社金晟は、大阪を拠点に、日本及び海外商品の仕入れ・輸出入・販売・代理及び越境EC事業を展開しています。',
        companyP2: '日本の優れた商品を海外市場へ届けるとともに、中国をはじめとする海外の優良商品を日本市場へ導入し、販売・市場開拓・ブランド展開をサポートしています。',
        companyP3: 'また、Webサイト制作、EC運営、SNS運営、広告・マーケティング、デザインなどのデジタルサービスを通じ、商品の販売からブランドプロモーションまで幅広くサポートします。',
        companyAddress: '〒542-0062 大阪府大阪市中央区上本町西一丁目1-9 ハイマート上町 501',
      }
    }
  };

  const STORAGE_KEY = 'superdream_lang';

  function getLang() {
    const url = new URL(location.href);
    const q = url.searchParams.get('lang');
    if (q === 'ja' || q === 'zh') return q;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'ja' || stored === 'zh') return stored;
    } catch (e) {}
    const path = location.pathname.toLowerCase();
    if (path.endsWith('/jp.html') || path.indexOf('/jp/') !== -1) return 'ja';
    return 'ja';
  }

  function setLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    const url = new URL(location.href);
    if (lang === 'ja') {
      url.searchParams.set('lang', 'ja');
    } else {
      url.searchParams.delete('lang');
    }
    location.href = url.toString();
  }

  function t(key) {
    const lang = getLang();
    return (dict[lang] && dict[lang].ui[key]) || (dict.zh.ui[key]) || key;
  }

  return { dict, getLang, setLang, t };
})();

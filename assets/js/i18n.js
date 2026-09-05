/**
 * SUPERDREAM 超级梦想 — 国际化文案
 * 支持 zh (繁体中文) / ja (日本語)
 * 仅保留 doc 物料实际支撑的 UI 文案
 */
window.JP_SHOP_I18N = (function () {
  const dict = {
    zh: {
      ui: {
        navHome: '首頁',
        navCustomer: '客服',
        recommend: '您可能也喜歡',
        contactTitle: '聯繫我們',
        contactSub: 'お気軽にご連絡ください',
        contactLine: 'LINE 官方賬號',
        contactLineDesc: '掃碼添加 LINE 好友，獲取最新產品與活動資訊',
        contactWechat: '微信 WeChat',
        contactWechatDesc: '日本 大阪市・張先生，長按識別二維碼加好友',
        contactTip: '長按或截圖保存二維碼，打開對應 APP 掃描即可',
        contactSlogan: '中国积木潮玩 · 任意组合 无限延展',
        contactSloganSmall: 'AGES 8+ · DIY · 6+ 主题场景',
        btnContact: '联 系 客 服'
      }
    },
    ja: {
      ui: {
        navHome: 'ホーム',
        navCustomer: 'サポート',
        recommend: 'こちらもおすすめ',
        contactTitle: 'お問い合わせ',
        contactSub: 'お気軽にご連絡ください',
        contactLine: 'LINE 公式アカウント',
        contactLineDesc: 'QRコードをスキャンしてLINE友達追加、新商品とお得な情報をお届け',
        contactWechat: 'WeChat（微信）',
        contactWechatDesc: '日本・大阪市・張様、QRコードを長押しで識別し友達追加',
        contactTip: 'QRコードを長押しまたはスクリーンショット保存して、各アプリでスキャンしてください',
        contactSlogan: '中国ブロック・トレンディ玩具・自由に組み合わせ 無限に拡張',
        contactSloganSmall: 'AGES 8+ ・ DIY ・ 6+ テーマシーン',
        btnContact: 'お問い合わせ'
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
    return 'zh';
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

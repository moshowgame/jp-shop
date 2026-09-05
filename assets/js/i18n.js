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
        seriesADesc: '亞克力防塵罩立方體 ・ 自由堆疊',
        seriesBDesc: '玻璃陽光房大場景 ・ 一屋即一世界',
        comboNote: '任 意 組 合 ・ 無 限 延 展',
        ctaTitle: '想要擁有您的夢想小屋嗎？',
        ctaLead: '掃碼添加 LINE / WeChat 客服，告知想要的系列與風格即可',
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
      }
    },
    ja: {
      ui: {
        back: '戻る',
        askShort: '相談',
        ctaBtn: 'お 問 い 合 わ せ',
        // ホーム
        heroSub: '中國ブロック・トレンディ玩具 ・ 自由に組み合わせ 無限に拡張',
        seriesADesc: 'アクリルケース付きキューブ ・ 自由に積み重ね',
        seriesBDesc: 'ガラスサンルームの大きなシーン ・ 一つの家が一つの世界',
        comboNote: '自 由 に 組 み 合 わ せ ・ 無 限 に 拡 張',
        ctaTitle: '夢のマイハウスを手に入れませんか？',
        ctaLead: 'LINE / WeChat で友達追加して、欲しいシリーズとスタイルをお知らせください',
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

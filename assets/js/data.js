/**
 * SUPERDREAM 超级梦想 — 产品数据
 * 两大系列 × 三大主题产品线，以物料海报图为核心
 * 默认日文展示，可切换中文；图注含中日双语
 */
window.JP_SHOP_DATA = (function () {
  const IMG = 'assets/images/products/';

  // ========== 系列 ==========
  const seriesList = [
    {
      id: 'A',
      name: '梦想立方 · 第一季',
      nameJa: 'ドリームキューブ ・ 第1シーズン',
      subtitle: 'DREAM CUBE PHASE 1',
    },
    {
      id: 'B',
      name: '超级梦想 · 第一季',
      nameJa: 'スーパードリーム ・ 第1シーズン',
      subtitle: 'SUPER DREAM PHASE 1',
    }
  ];

  // ========== 主题产品线 ==========
  const collections = [
    // ---- A 系列 ----
    {
      id: 'a-japan',
      series: 'A',
      theme: 'japan',
      name: '樱花物语',
      nameJa: 'さくら物語',
      sub: '樱之三部作 · The Trilogy of Cherry Blossoms',
      subJa: 'さくらの三部作 ・ The Trilogy of Cherry Blossoms',
      cover: IMG + 'a-japan-all.jpg',
      images: [
        { src: IMG + 'a-japan-1.jpg', caption: '樱之歌', captionJa: 'さくらのうた', captionEn: 'SAKURA SONG' },
        { src: IMG + 'a-japan-2.jpg', caption: '开运屋', captionJa: '開運ハウス', captionEn: 'LUCKY HOUSE' },
        { src: IMG + 'a-japan-3.jpg', caption: '樱之恋', captionJa: 'さくらのこい', captionEn: "SAKURA'S LOVE" },
        { src: IMG + 'a-japan-all.jpg', caption: '樱之三部作 · 全家福', captionJa: 'さくら三部作 ・ コンプリート', captionEn: 'THE TRILOGY' },
      ],
    },
    {
      id: 'a-coffee',
      series: 'A',
      theme: 'coffee',
      name: '走过咖啡屋',
      nameJa: 'はじまりのカフェ',
      sub: 'Walking past the coffee shop',
      subJa: '香りと温もりのカフェ',
      cover: IMG + 'a-coffee-3.jpg',
      images: [
        { src: IMG + 'a-coffee-1.jpg', caption: '快乐起啡', captionJa: 'ハッピーコーヒー', captionEn: 'HAPPY COFFEE' },
        { src: IMG + 'a-coffee-2.jpg', caption: '啡黄腾达', captionJa: 'ハッピーコーヒー・プロ', captionEn: 'HAPPY COFFEE PRO' },
        { src: IMG + 'a-coffee-3.jpg', caption: '走过咖啡屋 · 组合', captionJa: 'カフェ ・ デュオ', captionEn: 'COFFEE DUO' },
      ],
    },
    {
      id: 'a-starry',
      series: 'A',
      theme: 'starry',
      name: '夜空中最亮的星',
      nameJa: '星空の物語',
      sub: 'The brightest star in the night sky',
      subJa: '夜空で一番輝く星',
      cover: IMG + 'a-starry-3.jpg',
      images: [
        { src: IMG + 'a-starry-1.jpg', caption: '星语', captionJa: '星のささやき', captionEn: 'STAR WHISPERS' },
        { src: IMG + 'a-starry-2.jpg', caption: '星愿', captionJa: '星のねがい', captionEn: 'STAR WISHER' },
        { src: IMG + 'a-starry-3.jpg', caption: '星空 · 组合', captionJa: '星空 ・ デュオ', captionEn: 'STARRY DUO' },
      ],
    },
    // ---- B 系列 ----
    {
      id: 'b-japan',
      series: 'B',
      theme: 'japan',
      name: '日本风',
      nameJa: '和風スタイル',
      sub: '樱花树下的约定 · 北国之春',
      subJa: '桜の樹の下の約束 ・ 北国の春',
      cover: IMG + 'b-japan-1.jpg',
      images: [
        { src: IMG + 'b-japan-1.jpg', caption: '樱花树下的约定', captionJa: '桜の樹の下の約束', captionEn: 'The Agreement Under the Cherry Blossom Tree' },
        { src: IMG + 'b-japan-2.jpg', caption: '北国之春', captionJa: '北国の春', captionEn: 'Northern Spring' },
      ],
    },
    {
      id: 'b-starry',
      series: 'B',
      theme: 'starry',
      name: '星语心愿',
      nameJa: '星の願い',
      sub: 'The brightest star in the night sky',
      subJa: '夜空で一番輝く星',
      cover: IMG + 'b-starry-1.jpg',
      images: [
        { src: IMG + 'b-starry-1.jpg', caption: '星语心愿', captionJa: '星の願い', captionEn: 'Star Wishes' },
      ],
    },
    {
      id: 'b-coffee',
      series: 'B',
      theme: 'coffee',
      name: '阿莫尔咖啡店',
      nameJa: 'カフェ・アムール',
      sub: 'Walking past the coffee shop',
      subJa: '香りと温もりのカフェ',
      cover: IMG + 'b-coffee-1.jpg',
      images: [
        { src: IMG + 'b-coffee-1.jpg', caption: '阿莫尔咖啡店', captionJa: 'カフェ・アムール', captionEn: 'Cafe Amour' },
      ],
    },
  ];

  // ========== 主题类别 ==========
  const themes = [
    { key: 'japan', name: '日本风', nameJa: '和風', icon: '❀' },
    { key: 'coffee', name: '咖啡风', nameJa: 'カフェ', icon: '☕' },
    { key: 'starry', name: '星空风', nameJa: '星空', icon: '✦' },
  ];

  // ========== 辅助函数 ==========
  function getSeries(id) {
    return seriesList.find(s => s.id === id);
  }
  function getCollection(id) {
    return collections.find(c => c.id === id);
  }
  function getBySeries(seriesId) {
    return collections.filter(c => c.series === seriesId);
  }
  function t(obj, field, lang) {
    if (lang === 'ja') {
      return obj[field + 'Ja'] !== undefined ? obj[field + 'Ja'] : obj[field];
    }
    return obj[field];
  }

  return { seriesList, collections, themes, getSeries, getCollection, getBySeries, t };
})();

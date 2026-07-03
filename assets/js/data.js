/**
 * 匠物 — 商品 mock 數據
 * 10 款日系生活好物
 */
window.JP_SHOP_DATA = (function () {
  const products = [
    {
      id: 'p01',
      name: '宇治抹茶套裝',
      nameJa: '宇治抹茶セット',
      category: 'tea',
      categoryName: '茶器・餐具',
      price: 168,
      cover: imageUrl('Japanese matcha tea set, ceramic tea bowl, bamboo whisk chasen, on linen cloth, soft natural window light, wabi-sabi, beige background, top view, minimalist', 'portrait_4_3'),
      images: [
        imageUrl('Japanese matcha tea set, ceramic tea bowl, bamboo whisk chasen, soft natural light, beige background, top view, minimalist', 'square'),
        imageUrl('Matcha green tea powder in wooden spoon, ceramic bowl, traditional Japanese, soft light, top view', 'square'),
        imageUrl('Bamboo chasen whisk, ceramic chawan tea bowl, Japanese matcha ceremony tools, soft beige background, minimalist', 'square')
      ],
      material: '陶器 / 竹',
      size: '茶碗 8cm / 茶筅 10cm',
      origin: '日本・宇治',
      description: '<p>來自宇治百年老鋪的手作茶器組合，包含一只薄燒茶碗與天然竹製茶筅。釉色溫潤，邊緣的淺綠色澤宛如初春茶園。</p><p>以八十目石磨低速研磨的抹茶粉，沖泡時散發出青草與海苔的清雅香氣。茶碗可作為日常抹茶杯使用，亦可盛裝小食。</p>',
      tags: ['手作', '限量', '茶道']
    },
    {
      id: 'p02',
      name: '櫻花和菓子禮盒',
      nameJa: '桜の和菓子詰合せ',
      category: 'food',
      categoryName: '食・甜點',
      price: 128,
      cover: imageUrl('Japanese sakura mochi wagashi sweets, pink white traditional, elegant plating, soft natural light, top view', 'portrait_4_3'),
      images: [
        imageUrl('Japanese sakura mochi wagashi, pink and white traditional sweets, elegant wooden tray, soft light', 'square'),
        imageUrl('Close up of cherry blossom wagashi, delicate pink petal pattern, traditional Japanese confection, top view', 'square'),
        imageUrl('Assorted Japanese wagashi sweets, pastel colors, wooden box, minimalist, top view', 'square')
      ],
      material: '糯米 / 紅豆 / 櫻葉',
      size: '8 入 / 禮盒',
      origin: '日本・京都',
      description: '<p>春季限定的櫻花和菓子禮盒，由京都老字號和菓子屋手工製作，包含櫻餅、草餅、求肥等八枚精緻小品。</p><p>每一片都包裹著一片鹽漬櫻葉，清雅花香與紅豆餡的甘甜在舌尖綻放，是賞花時節最應景的伴手禮。</p>',
      tags: ['限定', '季節', '送禮']
    },
    {
      id: 'p03',
      name: '招財貓擺件',
      nameJa: '招き猫',
      category: 'home',
      categoryName: '居家・擺件',
      price: 98,
      cover: imageUrl('Japanese maneki neko lucky cat figurine, white ceramic, traditional, soft light, minimalist beige background', 'portrait_4_3'),
      images: [
        imageUrl('White maneki neko lucky cat, ceramic, raised paw, traditional Japanese, soft window light', 'square'),
        imageUrl('Close up of maneki neko face, hand painted ceramic, red collar with golden bell, beige background', 'square'),
        imageUrl('Maneki neko on wooden shelf, traditional Japanese home interior, wabi-sabi atmosphere', 'square')
      ],
      material: '陶瓷 / 手繪',
      size: '高 15cm',
      origin: '日本・東京',
      description: '<p>舉起右爪招財、舉起左爪招客的經典招財貓。純白釉色搭配朱紅項圈與金鈴，溫潤雅緻。</p><p>陶瓷由職人逐隻手繪，每隻表情略有差異，是店鋪與居家招福的經典擺件。</p>',
      tags: ['招福', '手繪']
    },
    {
      id: 'p04',
      name: '漆金筷組',
      nameJa: '漆塗り金箸',
      category: 'tea',
      categoryName: '茶器・餐具',
      price: 88,
      cover: imageUrl('Japanese lacquer chopsticks with gold accent, minimalist, dark background, soft light, top view', 'portrait_4_3'),
      images: [
        imageUrl('Black lacquer chopsticks with gold tip, traditional Japanese, minimalist, soft side light', 'square'),
        imageUrl('Pair of chopsticks on chopstick rest, Japanese tableware, dark wood background, soft light', 'square'),
        imageUrl('Hand holding Japanese chopsticks, black lacquer, gold accent, soft beige background', 'square')
      ],
      material: '天然木 / 漆塗 / 金箔',
      size: '長 23cm / 對裝',
      origin: '日本・新潟',
      description: '<p>採用越後天然檜木，經七道漆工序打磨而成。筷尖點綴一筆金箔，使用時手部輪廓更顯優雅。</p><p>附原木筷架，無論自用或饋贈皆宜。日常使用後以柔軟布巾擦拭，可長保光澤。</p>',
      tags: ['工藝', '金箔']
    },
    {
      id: 'p05',
      name: '富士山玻璃杯',
      nameJa: '富士グラス',
      category: 'tea',
      categoryName: '茶器・餐具',
      price: 78,
      cover: imageUrl('Mt Fuji shaped glass cup, blue gradient sky, transparent glass, soft natural light, white background', 'portrait_4_3'),
      images: [
        imageUrl('Mt Fuji shaped glass cup with blue ice inside, soft side light, white background, minimalist', 'square'),
        imageUrl('Hand holding Mt Fuji glass, blue sky reflection, traditional Japanese aesthetic', 'square'),
        imageUrl('Pair of Mt Fuji glasses, blue gradient, soft light, beige linen background', 'square')
      ],
      material: '手工玻璃',
      size: '高 9cm / 容量 280ml',
      origin: '日本・江戶切子',
      description: '<p>杯身輪廓取自初夏清晨的富士山脈，杯底封入一片漸層藍天，注入透明飲品時彷彿倒映整片青空。</p><p>採用江戶切子技法手工吹製，杯口薄透，杯壁厚實。無論冷飲清酒或冰水，皆能感受山色的清涼。</p>',
      tags: ['手作', '清透']
    },
    {
      id: 'p06',
      name: '江戶風鈴',
      nameJa: '風鈴',
      category: 'home',
      categoryName: '居家・擺件',
      price: 68,
      cover: imageUrl('Japanese glass wind chime furin, summer, traditional blue white pattern, soft natural light, minimalist', 'portrait_4_3'),
      images: [
        imageUrl('Japanese glass wind chime furin, blue and white traditional pattern, hanging, soft window light', 'square'),
        imageUrl('Close up of Edo furin glass wind chime, delicate hand painted pattern, beige background', 'square'),
        imageUrl('Wind chime hanging at traditional Japanese engawa porch, summer light, atmospheric', 'square')
      ],
      material: '玻璃 / 和紙 / 木',
      size: '直徑 7cm / 全長 22cm',
      origin: '日本・江戶',
      description: '<p>江戶切子工藝的玻璃風鈴，垂掛一枚和紙短冊。風起時清越的音色為夏日帶來片刻清涼。</p><p>玻璃表面以傳統染付技法描繪流水紋路，光線穿透時在牆面投下淡藍波光，視覺與聽覺同步療癒。</p>',
      tags: ['夏日', '音樂']
    },
    {
      id: 'p07',
      name: '和紋手帕',
      nameJa: '和柄ハンカチ',
      category: 'craft',
      categoryName: '文房・手作',
      price: 38,
      cover: imageUrl('Japanese traditional indigo blue pattern handkerchief, asanoha pattern, soft fabric, top view, beige background', 'portrait_4_3'),
      images: [
        imageUrl('Folded Japanese handkerchief, indigo blue asanoha pattern, top view, soft light, linen background', 'square'),
        imageUrl('Hand holding indigo pattern handkerchief, Japanese traditional asanoha design, soft side light', 'square'),
        imageUrl('Stack of colorful Japanese pattern handkerchiefs, traditional motifs, top view', 'square')
      ],
      material: '綿 100% / 注染',
      size: '50 × 50 cm',
      origin: '日本・奈良',
      description: '<p>採用奈良傳統注染工藝，將麻葉紋、矢絣紋、青海波紋等經典和柄反覆浸染而成。</p><p>正反兩面色澤飽滿一致，愈洗愈顯柔潤。可作為手帕、包巾或裝飾使用，隨身攜帶一抹江戶氣息。</p>',
      tags: ['注染', '和柄']
    },
    {
      id: 'p08',
      name: '旅人手帳',
      nameJa: '旅の手帳',
      category: 'craft',
      categoryName: '文房・手作',
      price: 158,
      cover: imageUrl('Japanese travel notebook, kraft cover, minimalist, fountain pen on side, top view, soft natural light', 'portrait_4_3'),
      images: [
        imageUrl('Opened Japanese travel notebook, blank pages, fountain pen, soft natural light, wooden desk', 'square'),
        imageUrl('Hand writing in Japanese travel journal, kraft cover, soft side light, atmospheric', 'square'),
        imageUrl('Stack of Japanese notebooks with kraft covers, ribbon bookmark, minimalist, top view', 'square')
      ],
      material: '牛皮紙 / 棉布 / 絲帶',
      size: 'A6 / 192 頁',
      origin: '日本・京都',
      description: '<p>仿照昭和年代旅人筆記本的素樸造型，封面採用水洗牛皮紙，內頁使用 72gsm 奶油色和紙，書寫流暢不暈墨。</p><p>附緞帶書籤與書脊鬆緊帶，可攤平 180°書寫。無論是旅行紀錄、隨筆速寫或日常規劃，皆能從容容納。</p>',
      tags: ['手帳', '和紙']
    },
    {
      id: 'p09',
      name: '折紙禮盒',
      nameJa: '折り紙セット',
      category: 'craft',
      categoryName: '文房・手作',
      price: 58,
      cover: imageUrl('Japanese origami paper set, colorful traditional patterns, stacked, soft natural light, top view', 'portrait_4_3'),
      images: [
        imageUrl('Origami paper sheets fan out, traditional Japanese patterns, soft light, top view', 'square'),
        imageUrl('Hand folding origami crane, traditional patterned paper, soft side light, atmospheric', 'square'),
        imageUrl('Origami cherry blossom from above on wooden table, soft light, traditional patterns', 'square')
      ],
      material: '和紙 / 植物染',
      size: '15 × 15 cm / 100 張',
      origin: '日本・千葉',
      description: '<p>嚴選 100 張植物染和紙，涵蓋櫻、梅、流水、市松、麻葉等 12 種傳統和柄，每張色澤皆略有差異。</p><p>紙質柔韌，多次摺疊仍能保持俐落線條，作品完成後可作為書籤、飾品或包裝使用。</p>',
      tags: ['手作', '教育']
    },
    {
      id: 'p10',
      name: '抹茶毛巾布',
      nameJa: '抹茶タオル',
      category: 'home',
      categoryName: '居家・擺件',
      price: 48,
      cover: imageUrl('Soft green matcha color towel folded, soft fabric, minimalist, soft light, top view, beige background', 'portrait_4_3'),
      images: [
        imageUrl('Folded green matcha towel, soft fabric texture, side light, beige background, minimalist', 'square'),
        imageUrl('Hand holding soft green towel, soft side light, Japanese aesthetic, atmospheric', 'square'),
        imageUrl('Stack of pastel green towels, soft light, wabi-sabi composition, top view', 'square')
      ],
      material: '有機棉 100%',
      size: '34 × 80 cm',
      origin: '日本・今治',
      description: '<p>今治認證的有機棉毛巾布，以植物性染料染出溫潤的抹茶綠色。觸感蓬鬆柔軟，吸水性優異。</p><p>不含螢光劑，敏感肌亦可使用。隨著使用時間增長，色澤將漸趨沉靜，越用越有味道。</p>',
      tags: ['有機', '今治']
    }
  ];

  const categories = [
    { key: 'all',   name: '全部',   ja: 'すべて' },
    { key: 'tea',   name: '茶器・餐具', ja: '茶器' },
    { key: 'craft', name: '文房・手作', ja: '文具' },
    { key: 'home',  name: '居家・擺件', ja: '暮らし' },
    { key: 'food',  name: '食・甜點',   ja: '甘味' }
  ];

  function getById(id) {
    return products.find(p => p.id === id);
  }
  function getByCategory(key) {
    if (key === 'all') return products;
    return products.filter(p => p.category === key);
  }
  function getRecommend(id, n = 3) {
    const cur = getById(id);
    if (!cur) return products.slice(0, n);
    const sameCat = products.filter(p => p.id !== id && p.category === cur.category);
    const others = products.filter(p => p.id !== id && p.category !== cur.category);
    return [...sameCat, ...others].slice(0, n);
  }

  return { products, categories, getById, getByCategory, getRecommend };
})();

/**
 * 構造生成式圖片 URL
 */
function imageUrl(prompt, size) {
  const base = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image';
  return `${base}?prompt=${encodeURIComponent(prompt)}&image_size=${size || 'square_hd'}`;
}

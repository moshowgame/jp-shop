/**
 * 匠物 — 商品詳情頁邏輯
 */
(function ($) {
  const { getById, getRecommend } = window.JP_SHOP_DATA;

  // 解析 URL ?id=xxx
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const product = getById(id);

  // 找不到商品
  if (!product) {
    $('#detailContent').html(`
      <div class="empty-state">
        <p class="ja">商 品 不 存 在</p>
        <h3>找不到對應的商品</h3>
        <p>商品可能已下架或連結失效。</p>
        <a href="index.html">回到首頁</a>
      </div>
    `);
    document.title = '商品不存在 — 匠物';
    return;
  }

  // 標題
  document.title = `${product.name} — 匠物`;

  // 主圖與縮略圖
  const $mainImg = $('#mainImage');
  $mainImg.attr('src', product.cover);
  $mainImg.attr('alt', product.name);

  const $thumbs = $('#thumbs');
  product.images.forEach((src, i) => {
    const t = $(`<button class="thumb ${i === 0 ? 'active' : ''}" data-src="${src}" aria-label="查看第 ${i + 1} 張圖">
      <img src="${src}" alt="${product.name} 縮略圖 ${i + 1}">
    </button>`);
    $thumbs.append(t);
  });

  $thumbs.on('click', '.thumb', function () {
    $thumbs.find('.thumb').removeClass('active');
    $(this).addClass('active');
    const src = $(this).data('src');
    $mainImg.css('opacity', 0);
    setTimeout(() => {
      $mainImg.attr('src', src);
      $mainImg.css('opacity', 1);
    }, 150);
  });

  // 信息填充
  const $tags = $('#detailTags');
  product.tags.forEach(t => $tags.append(`<span>${t}</span>`));

  $('#detailName').text(product.name);
  $('#detailNameJa').text(product.nameJa);
  $('#detailPrice').text(product.price);

  $('#detailSpec').html(`
    <div class="row"><span class="label">材質</span><span class="value">${product.material}</span></div>
    <div class="row"><span class="label">尺寸</span><span class="value">${product.size}</span></div>
    <div class="row"><span class="label">產地</span><span class="value">${product.origin}</span></div>
    <div class="row"><span class="label">分類</span><span class="value">${product.categoryName}</span></div>
  `);

  $('#detailDesc').html(product.description);

  // CTA 綁定
  $('#btnBuy').on('click', function () {
    window.JP_SHOP.openQR('buy', product);
  });
  $('#btnContact').on('click', function () {
    window.JP_SHOP.openQR('contact', product);
  });

  // 相關推薦
  const reco = getRecommend(product.id, 3);
  const $reco = $('#recommendGrid');
  reco.forEach(p => {
    $reco.append(`
      <a class="reco-card" href="product.html?id=${p.id}">
        <div class="cover"><img src="${p.cover}" alt="${p.name}" loading="lazy"></div>
        <p class="name">${p.name}</p>
        <p class="price">${p.price}</p>
      </a>
    `);
  });

  // 返回按鈕
  $('#detailBack').on('click', function () {
    if (document.referrer && document.referrer.indexOf(location.host) !== -1) {
      history.back();
    } else {
      location.href = 'index.html';
    }
  });
})(jQuery);

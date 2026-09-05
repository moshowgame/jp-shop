/**
 * SUPERDREAM 超级梦想 — 商品詳情頁邏輯
 * 仅展示 doc 物料实际支撑的字段
 */
(function ($) {
  const { getById, getRecommend, t: tData } = window.JP_SHOP_DATA;
  const { getLang, t: tUi } = window.JP_SHOP_I18N;
  const lang = getLang();
  const isJa = lang === 'ja';
  const basePath = isJa ? 'jp/' : '';

  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const product = getById(id);

  if (!product) {
    $('#detailContent').html(`
      <div class="empty-state">
        <p class="ja">商 品 不 存 在</p>
        <h3>${isJa ? '商品が見つかりません' : '找不到對應的商品'}</h3>
        <p>${isJa ? '商品は既に販売終了またはリンクが無効です。' : '商品可能已下架或連結失效。'}</p>
        <a href="${basePath}${isJa ? 'jp.html' : 'index.html'}">${isJa ? 'ホームに戻る' : '回到首頁'}</a>
      </div>
    `);
    document.title = (isJa ? '商品が存在しません' : '商品不存在') + ' — SUPERDREAM';
    return;
  }

  document.title = `${tData(product, 'name', lang)} — SUPERDREAM`;
  document.documentElement.setAttribute('lang', isJa ? 'ja' : 'zh-Hant');

  const $langText = $('#langSwitchText');
  if ($langText.length) $langText.text(isJa ? '中' : 'JA');

  // 主圖與縮略圖
  const $mainImg = $('#mainImage');
  $mainImg.attr('src', product.cover);
  $mainImg.attr('alt', tData(product, 'name', lang));

  const $thumbs = $('#thumbs');
  product.images.forEach((src, i) => {
    const t = $(`<button class="thumb ${i === 0 ? 'active' : ''}" data-src="${src}" aria-label="${isJa ? '第' : '查看第'} ${i + 1} ${isJa ? '枚' : '張圖'}">
      <img src="${src}" alt="${tData(product, 'name', lang)} ${i + 1}">
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
  (isJa ? product.tagsJa : product.tags).forEach(t => $tags.append(`<span>${t}</span>`));

  $('#detailName').text(tData(product, 'name', lang));
  $('#detailNameJa').text(tData(product, 'nameJa', lang));
  $('#detailPrice').text(product.price);
  $('#detailSeries').text(`${product.series}${isJa ? 'シリーズ' : '系列'} · ${tData(product, 'seriesName', lang).replace(product.series + (isJa ? 'シリーズ' : '系列') + ' · ', '')}`);

  // 规格（仅展示 doc 物料中的字段）
  $('#detailSpec').html(`
    <div class="row"><span class="label">${isJa ? '素材' : '材質'}</span><span class="value">${tData(product, 'material', lang)}</span></div>
    <div class="row"><span class="label">${isJa ? 'サイズ' : '尺寸'}</span><span class="value">${tData(product, 'size', lang)}</span></div>
    <div class="row"><span class="label">${isJa ? '産地' : '產地'}</span><span class="value">${tData(product, 'origin', lang)}</span></div>
    <div class="row"><span class="label">${isJa ? 'テーマ' : '主題'}</span><span class="value">${tData(product, 'categoryName', lang)}</span></div>
  `);

  $('#detailDesc').html(tData(product, 'description', lang));
  $('#recommendTitle').text(tUi('recommend'));
  $('#btnContactText').text(tUi('btnContact'));

  // CTA 跳轉聯繫頁
  $('#btnContact').on('click', function () {
    location.href = basePath + 'contact.html' + (isJa ? '?lang=ja' : '');
  });

  // 相關推薦
  const reco = getRecommend(product.id, 3);
  const $reco = $('#recommendGrid');
  reco.forEach(p => {
    $reco.append(`
      <a class="reco-card" href="${basePath}product.html?id=${p.id}${isJa ? '&lang=ja' : ''}">
        <div class="cover">
          <span class="badge series-${p.series.toLowerCase()}">${p.series}${isJa ? 'シリーズ' : '系列'}</span>
          <img src="${p.cover}" alt="${tData(p, 'name', lang)}" loading="lazy">
        </div>
        <p class="name">${tData(p, 'name', lang)}</p>
        <p class="price">¥${p.price}</p>
      </a>
    `);
  });

  $('#detailBack').on('click', function () {
    const home = basePath + (isJa ? 'jp.html' : 'index.html');
    if (document.referrer && document.referrer.indexOf(location.host) !== -1) {
      history.back();
    } else {
      location.href = home;
    }
  });

  $('#langSwitch').on('click', function (e) {
    e.preventDefault();
    const url = new URL(location.href);
    if (isJa) url.searchParams.delete('lang');
    else url.searchParams.set('lang', 'ja');
    location.href = url.toString();
  });
})(jQuery);

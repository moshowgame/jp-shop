/**
 * SUPERDREAM 超级梦想 — 首頁邏輯
 * 仅展示 doc 物料实际支撑的产品与文案
 */
(function ($) {
  const { products, getByCategory, t: tData } = window.JP_SHOP_DATA;
  const { getLang, t: tUi } = window.JP_SHOP_I18N;
  const lang = getLang();

  let currentCategory = 'A';
  const $grid = $('#productGrid');
  const $chips = $('.chip');

  function applyI18n() {
    document.documentElement.setAttribute('lang', lang === 'ja' ? 'ja' : 'zh-Hant');
    document.title = (lang === 'ja' ? 'SUPERDREAM スーパードリーム ・ 金晟ブロック' : 'SUPERDREAM 超级梦想 ・ 金晟积木');

    $('[data-i18n]').each(function () {
      const key = $(this).data('i18n');
      $(this).html(tUi(key));
    });

    const $langText = $('#langSwitchText');
    if ($langText.length) $langText.text(lang === 'ja' ? '中' : 'JA');
  }

  function renderProducts(list) {
    $grid.addClass('is-loading');
    setTimeout(() => {
      $grid.empty();
      list.forEach(p => {
        const card = $(`
          <a class="product-card" href="${lang === 'ja' ? 'jp/product.html' : 'product.html'}?id=${p.id}${lang === 'ja' ? '&lang=ja' : ''}" aria-label="${tData(p, 'name', lang)}">
            <div class="cover">
              <span class="badge series-${p.series.toLowerCase()}">${p.series}${lang === 'ja' ? 'シリーズ' : '系列'}</span>
              <span class="cat">${tData(p, 'categoryName', lang)}</span>
              <img src="${p.cover}" alt="${tData(p, 'name', lang)}" loading="lazy">
            </div>
            <div class="info">
              <p class="name">${tData(p, 'name', lang)}</p>
              <p class="name-ja">${tData(p, 'nameJa', lang)}</p>
              <p class="price">¥${p.price}</p>
            </div>
          </a>
        `);
        $grid.append(card);
      });
      $grid.removeClass('is-loading');
    }, 160);
  }

  $chips.on('click', function (e) {
    const $chip = $(e.currentTarget);
    $chips.removeClass('active');
    $chip.addClass('active');
    currentCategory = $chip.data('cat');
    renderProducts(getByCategory(currentCategory));
  });

  applyI18n();
  // 默认展示 A 系列（PDF 的第一份图册）
  renderProducts(getByCategory('A'));

  $('#navContact').on('click', function (e) {
    e.preventDefault();
    const url = (lang === 'ja' ? 'jp/contact.html' : 'contact.html') + (lang === 'ja' ? '?lang=ja' : '');
    location.href = url;
  });

  $('#langSwitch').on('click', function (e) {
    e.preventDefault();
    const url = new URL(location.href);
    if (lang === 'ja') url.searchParams.delete('lang');
    else url.searchParams.set('lang', 'ja');
    location.href = url.toString();
  });
})(jQuery);

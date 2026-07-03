/**
 * 匠物 — 首頁邏輯
 */
(function ($) {
  const { products, categories, getByCategory } = window.JP_SHOP_DATA;

  let currentCategory = 'all';
  const $grid = $('#productGrid');
  const $chips = $('.chip');

  function renderProducts(list) {
    $grid.addClass('is-loading');
    setTimeout(() => {
      $grid.empty();
      if (!list.length) {
        $grid.html(`
          <div class="empty-state" style="grid-column: span 2;">
            <p class="ja">準備中</p>
            <h3>該分類暫無商品</h3>
            <p>敬請期待更多匠心之作。</p>
          </div>
        `);
      } else {
        list.forEach(p => {
          const card = $(`
            <a class="product-card" href="product.html?id=${p.id}" aria-label="查看 ${p.name} 詳情">
              <div class="cover">
                <span class="badge">${p.tags[0] || '匠物'}</span>
                <img src="${p.cover}" alt="${p.name}" loading="lazy">
              </div>
              <div class="info">
                <p class="name">${p.name}</p>
                <p class="name-ja">${p.nameJa}</p>
                <p class="price">${p.price}</p>
              </div>
            </a>
          `);
          $grid.append(card);
        });
      }
      $grid.removeClass('is-loading');
    }, 160);
  }

  // 初始化 chip 點擊
  $chips.on('click', function (e) {
    const $chip = $(e.currentTarget);
    $chips.removeClass('active');
    $chip.addClass('active');
    currentCategory = $chip.data('cat');
    renderProducts(getByCategory(currentCategory));
  });

  // 初次渲染全部
  renderProducts(products);

  // Hero CTA 滾動到商品區
  $('.hero-cta').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('#collection').offset().top - 10 }, 500);
  });

  // 底部導航：客服 → 跳轉聯繫頁
  $('#navContact').on('click', function (e) {
    e.preventDefault();
    location.href = 'contact.html';
  });
})(jQuery);

/**
 * SUPERDREAM 超级梦想 — 首页逻辑
 * 渲染 A/B 系列主题卡片 + 双语切换
 */
(function ($) {
  const { seriesList, getBySeries, t } = window.JP_SHOP_DATA;
  const { getLang, t: tUi } = window.JP_SHOP_I18N;
  const lang = getLang();
  const isJa = lang === 'ja';

  function qs(suffix) {
    if (!isJa) return suffix;
    return suffix + (suffix.indexOf('?') >= 0 ? '&' : '?') + 'lang=ja';
  }

  // ========== 渲染主题卡片 ==========
  function renderThemeGrid(gridId, seriesId) {
    const $grid = $(gridId);
    const list = getBySeries(seriesId);

    list.forEach(c => {
      const card = `
        <a class="theme-card" href="${qs('product.html?c=' + c.id)}">
          <div class="thumb">
            <img src="${c.cover}" alt="${t(c, 'name', lang)}" loading="lazy">
            <span class="series-tag">${seriesId}</span>
          </div>
          <div class="body">
            <p class="name">${t(c, 'name', lang)}</p>
            <p class="name-ja">${isJa ? c.name : c.nameJa}</p>
            <span class="arrow">${isJa ? '見る' : '查看'} <i class="bi bi-arrow-right"></i></span>
          </div>
        </a>
      `;
      $grid.append(card);
    });
  }

  renderThemeGrid('#themeGridA', 'A');
  renderThemeGrid('#themeGridB', 'B');

  // ========== i18n ==========
  document.documentElement.setAttribute('lang', isJa ? 'ja' : 'zh-Hant');
  document.title = isJa ? 'SUPERDREAM スーパードリーム ・ 金晟' : 'SUPERDREAM 超级梦想 ・ 金晟';

  $('[data-i18n]').each(function () {
    $(this).html(tUi($(this).data('i18n')));
  });

  $('#langSwitchText').text(isJa ? '中' : 'JA');
  $('#ctaBtn').attr('href', isJa ? 'contact.html?lang=ja' : 'contact.html');

  // 语言切换
  $('#langSwitch').on('click', function () {
    const url = new URL(location.href);
    if (isJa) url.searchParams.delete('lang');
    else url.searchParams.set('lang', 'ja');
    location.href = url.toString();
  });
})(jQuery);

/**
 * SUPERDREAM 超级梦想 — 主题图集页
 * 大幅展示该主题全部物料海报图 + 咨询按钮带上下文
 */
(function ($) {
  const { getCollection, getSeries, themes, t } = window.JP_SHOP_DATA;
  const { getLang, t: tUi } = window.JP_SHOP_I18N;
  const lang = getLang();
  const isJa = lang === 'ja';

  // 日式序号
  const JP_NUM = ['壱', '弐', '参', '四', '五', '六', '七', '八', '九', '拾'];

  function qs(suffix) {
    return isJa ? suffix + '?lang=ja' : suffix;
  }

  // ========== 读取当前主题 ==========
  const params = new URLSearchParams(location.search);
  const collection = getCollection(params.get('c')) || getCollection('a-japan');
  const series = getSeries(collection.series);
  const themeMeta = themes.find(t2 => t2.key === collection.theme) || {};

  // ========== 基础信息 ==========
  document.documentElement.setAttribute('lang', isJa ? 'ja' : 'zh-Hant');
  document.title = `${t(collection, 'name', lang)} — SUPERDREAM`;

  $('#crumbSeries').text(isJa ? `${series.id}シリーズ` : `${series.id}系列`);
  $('#crumbTheme').text(t(collection, 'name', lang));
  $('#themeIcon').text(themeMeta.icon || '❀');
  $('#themeName').text(t(collection, 'name', lang));
  $('#themeSub').text(t(collection, 'sub', lang));
  $('#seriesLine').text(`${t(series, 'name', lang)} ・ ${series.subtitle}`);

  // 咨询按钮（带主题上下文）
  $('#btnAsk, #btnAskBottom').each(function () {
    $(this).attr('href', qs('contact.html?c=' + collection.id));
  });

  // 返回
  $('#btnBack').on('click', function () {
    if (document.referrer && document.referrer.indexOf(location.host) !== -1) {
      history.back();
    } else {
      location.href = qs('index.html');
    }
  });

  // i18n
  $('[data-i18n]').each(function () {
    $(this).html(tUi($(this).data('i18n')));
  });

  // ========== 渲染图集 ==========
  const $list = $('#galleryList');
  collection.images.forEach((img, i) => {
    const item = `
      <figure class="art-item">
        <div class="frame">
          <img src="${img.src}" alt="${img.caption}" loading="lazy">
        </div>
        <figcaption class="art-caption">
          <span class="no">${JP_NUM[i] || i + 1}</span>
          <span class="name">${img.caption}</span>
          <span class="en">${img.captionEn}</span>
        </figcaption>
      </figure>
    `;
    $list.append(item);
  });

  // 滚动淡入
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.art-item').forEach(function (el) {
    io.observe(el);
  });

  // 语言切换（保留主题参数）
  const $lang = $('<button class="lang-btn" id="langSwitch"><i class="bi bi-translate"></i><span>' + (isJa ? '中' : 'JA') + '</span></button>');
  $('.gallery-topbar').append($lang);
  $lang.on('click', function () {
    const url = new URL(location.href);
    if (isJa) url.searchParams.delete('lang');
    else url.searchParams.set('lang', 'ja');
    location.href = url.toString();
  });
})(jQuery);

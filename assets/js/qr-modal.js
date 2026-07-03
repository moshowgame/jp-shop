/**
 * 匠物 — QR Code 彈窗通用邏輯
 * 依賴：Bootstrap 5 (Modal), qrcode.js
 */
window.JP_SHOP = window.JP_SHOP || {};

(function (ns) {
  let modalInstance = null;
  let currentQR = null;
  let currentType = 'buy';
  let currentProduct = null;

  /**
   * 打開 QR Code 彈窗
   * @param {'buy'|'contact'} type 場景
   * @param {object} product 當前商品
   */
  function openQR(type, product) {
    currentType = type;
    currentProduct = product;

    const modalEl = document.getElementById('qrModal');
    if (!modalEl) return;

    // 標題與文案
    const eyebrow = modalEl.querySelector('.qr-eyebrow');
    const title = modalEl.querySelector('h5');
    const sub = modalEl.querySelector('.qr-sub');
    const tip = modalEl.querySelector('.qr-tip');
    const qrcode = modalEl.querySelector('#qrcode');

    if (type === 'buy') {
      eyebrow.textContent = 'BUY ・ 購 買';
      title.textContent = '掃碼下單';
      sub.textContent = product ? product.nameJa : 'QR コードを読み取る';
      tip.innerHTML = '使用 <b>LINE</b> 掃描 QR Code<br>添加匠物小助手完成下單<small>※ 截圖保存亦可</small>';
    } else {
      eyebrow.textContent = 'CONTACT ・ 聯 繫';
      title.textContent = '聯繫店鋪';
      sub.textContent = 'お 問 合 せ';
      tip.innerHTML = '使用 <b>微信 WeChat</b> 掃描 QR Code<br>匠物客服將為您解答<small>※ 工作日 10:00 – 19:00 回覆</small>';
    }

    // 清空舊 QR
    qrcode.innerHTML = '';

    // 構造 QR 內容（生產環境可改為真實 URL）
    const baseUrl = 'https://jp-shop.example.com/';
    let qrText = '';
    if (type === 'buy') {
      qrText = `${baseUrl}order?sku=${product ? product.id : ''}&t=${Date.now()}`;
    } else {
      qrText = `${baseUrl}contact?channel=wechat&t=${Date.now()}`;
    }

    // 生成 QR Code
    if (window.QRCode) {
      currentQR = new window.QRCode(qrcode, {
        text: qrText,
        width: 200,
        height: 200,
        colorDark: '#1a1a1a',
        colorLight: '#ffffff',
        correctLevel: window.QRCode.CorrectLevel.M
      });
    } else {
      qrcode.innerHTML = '<p style="color:#b94a48">QR 庫未載入</p>';
    }

    // 顯示彈窗
    if (!modalInstance) {
      modalInstance = new bootstrap.Modal(modalEl, { backdrop: true, keyboard: true });
    }
    modalInstance.show();
  }

  function closeQR() {
    if (modalInstance) modalInstance.hide();
  }

  // 暴露到全局
  ns.openQR = openQR;
  ns.closeQR = closeQR;
  ns.getCurrentProduct = function () { return currentProduct; };
  ns.getCurrentType = function () { return currentType; };
})(window.JP_SHOP);

document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('submitBtn').addEventListener('click', function() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const linkContainer = document.getElementById('linkContainer');

    // 電話番号が入力されているか確認
    if (phoneNumber) {
      // リンクを作成
      const link = document.createElement('a');
      link.href = `tel:${phoneNumber}`;
      link.textContent = phoneNumber;

      // 既存のリンクをクリアして新しいリンクを追加
      linkContainer.innerHTML = '';
      linkContainer.appendChild(link);
    } else {
      // 電話番号が入力されていない場合の処理
      linkContainer.innerHTML = '電話番号を入力してください。';
    }
  });

  const link = document.getElementById('phoneLink');
  link?.addEventListener('click', function() {
    setTimeout(function() {
      window.location.href = '#targetSection';
    }, 1000);
  });

  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      alert('active');
    }
  })
});

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMの読み込みが完了しました');

  const link = document.getElementById('phoneLink');
  link?.addEventListener('click', function() {
    console.log('押下を検知')
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

window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    alert('active');
  }
})

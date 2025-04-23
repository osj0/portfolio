window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});


setTimeout(() => {
  const loadingBox = document.querySelector('.sloading_bx');
  const mainBox = document.querySelector('.main-bx');

  loadingBox.classList.add('fade-out');
  loadingBox.style.pointerEvents = 'none'; // ✅ 클릭 통과 처리

  mainBox.style.opacity = '1';
  mainBox.style.pointerEvents = 'auto';
}, 5100);

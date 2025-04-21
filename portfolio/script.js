window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});


setTimeout(() => {
    document.querySelector('.sloading_bx').classList.add('fade-out');
    document.querySelector('.main-bx').style.opacity = '1';
    document.querySelector('.main-bx').style.pointerEvents = 'auto';
  }, 4800); // 4.8초 뒤 전환 (애니메이션 흐름에 맞춰 조정 가능)


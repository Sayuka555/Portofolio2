document.addEventListener('DOMContentLoaded', function () {
  function scrollEffect() {
    const elements = document.querySelectorAll('.scroll-up');
    const scrollY = window.scrollY;
    const windowH = window.innerHeight;
    const showTiming = 200; // 表示開始のタイミング

    elements.forEach((element) => {
      const elemRect = element.getBoundingClientRect();
      const elemY = scrollY + elemRect.top;

      if (scrollY > elemY - windowH + showTiming) {
        element.classList.add('is-show');
      }
    });
  }

  window.addEventListener('scroll', () => {
    requestAnimationFrame(scrollEffect);
  });

  // 初回読み込み時にも実行
  scrollEffect();
});

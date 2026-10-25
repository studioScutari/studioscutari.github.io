// Studio Scutari - gentle parallax for the hero porthole
(function () {
  var hero = document.querySelector('.hero');
  var layers = document.querySelectorAll('.pc-par');
  if (!hero || !layers.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;

  hero.addEventListener('pointermove', function (e) {
    var r = hero.getBoundingClientRect();
    var x = (e.clientX - r.left) / r.width - .5;
    var y = (e.clientY - r.top) / r.height - .5;
    layers.forEach(function (el) {
      var d = +el.dataset.depth || 4;
      el.style.transform = 'translate(' + (-x * d * 2) + 'px,' + (-y * d) + 'px)';
    });
  });
  hero.addEventListener('pointerleave', function () {
    layers.forEach(function (el) { el.style.transform = ''; });
  });
})();

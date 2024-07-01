<script>
  document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;

    const inner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const next = carousel.querySelector('.carousel-control.next');
    const prev = carousel.querySelector('.carousel-control.prev');

    if (!inner || !items.length || !next || !prev) return;

    let currentIndex = 0;

    function updateCarousel() {
      inner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    next.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    });

    prev.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    });
  });
</script>
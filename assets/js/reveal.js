(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;

  var els = document.querySelectorAll(
    ".benefit-card, .row-item, .philosophy-card, .price-card, .faq-item"
  );
  if (!els.length) return;

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  els.forEach(function (el) {
    el.classList.add("reveal");
    io.observe(el);
  });
})();

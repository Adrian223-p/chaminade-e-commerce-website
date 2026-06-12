/* Chaminade School Store — shared interactions */
document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Footer year
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ----- Order form: live total ------------------------------------- */
  var orderForm = document.getElementById('orderForm');
  if (orderForm) {
    var priceMap = {};
    document.querySelectorAll('#product option[data-price]').forEach(function (o) {
      priceMap[o.value] = parseFloat(o.getAttribute('data-price'));
    });
    var product = document.getElementById('product');
    var qty = document.getElementById('quantity');
    var totalOut = document.getElementById('orderTotal');

    function recalc() {
      var p = priceMap[product.value] || 0;
      var q = parseInt(qty.value, 10) || 0;
      var total = (p * q);
      totalOut.textContent = '$' + total.toFixed(2);
    }
    product.addEventListener('change', recalc);
    qty.addEventListener('input', recalc);
    recalc();

    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('orderSuccess').classList.remove('hidden');
      orderForm.reset();
      recalc();
      document.getElementById('orderSuccess').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* ----- Feedback form: confirmation --------------------------------- */
  var fbForm = document.getElementById('feedbackForm');
  if (fbForm) {
    fbForm.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('feedbackSuccess').classList.remove('hidden');
      fbForm.reset();
      document.getElementById('feedbackSuccess').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
});

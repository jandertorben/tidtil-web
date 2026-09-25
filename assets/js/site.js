// TidTil – kleine Verbesserungen für die serverseitig gerenderte Seite.
// Alles funktioniert auch ohne dieses Skript; es macht nur lebendig:
// Live-Tag + Zeitregler, Satz-Demo, Monat/Jahr-Preis, Personenzähler, FAQ.
(function () {
  "use strict";

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var fill = function (s, o) { return s.replace(/\{(\w+)\}/g, function (_, k) { return o[k]; }); };
  var pad = function (n) { return String(n).padStart(2, "0"); };
  var fmt = function (m) { return pad(Math.floor(m / 60)) + ":" + pad(m % 60); };
  var clampDay = function (m) { return Math.min(1380, Math.max(360, m)); };
  var nowMin = function () { var d = new Date(); return clampDay(d.getHours() * 60 + d.getMinutes()); };

  // ---------- FAQ: immer nur ein Eintrag offen ----------
  $$("[data-faq], .page-faq").forEach(function (list) {
    var items = $$("details.faq-item", list);
    items.forEach(function (d) {
      d.addEventListener("toggle", function () {
        if (!d.open) return;
        items.forEach(function (o) { if (o !== d) o.open = false; });
      });
    });
  });

  var dataEl = $("#tt-data");
  if (!dataEl) return;
  var T;
  try { T = JSON.parse(dataEl.textContent); } catch (e) { return; }
  var L = T.live;

  var money = function (n) {
    var s = n.toFixed(2);
    return T.lang === "en" ? "€" + s : s.replace(".", ",") + " €";
  };
  var dur = function (m) {
    if (m < 60) return m + " " + L.min;
    return Math.floor(m / 60) + " " + L.h + (m % 60 ? " " + (m % 60) + " " + L.min : "");
  };

  // ---------- Euer Tag ----------
  var dayEl = $("[data-day]");
  var summaryEl = $("[data-summary]");
  var clockEl = $("[data-clock]");
  var scrubber = $("[data-scrubber]");
  var datelineEl = $("[data-dateline]");

  var t = nowMin();
  var userMoved = false;
  var added = [];

  function allEvents() {
    return L.events.concat(added).slice().sort(function (a, b) { return a.start - b.start; });
  }

  function row(e) {
    var li = document.createElement("li");
    li.className = "day-row";
    li.innerHTML =
      '<span class="day-time"></span>' +
      '<span class="day-main"><span class="day-what"></span>' +
      '<span class="day-who"><span class="dot"></span><span class="day-who-text"></span></span></span>' +
      '<span class="day-badge"></span>';
    $(".day-time", li).textContent = fmt(e.start);
    $(".day-what", li).textContent = e.what;
    $(".dot", li).style.setProperty("--c", T.colors[e.who]);
    $(".day-who-text", li).textContent = L.who[e.who] + " · " + (e.family ? L.fam : L.priv);
    return li;
  }

  function renderDay() {
    if (!dayEl) return;
    var evs = allEvents();
    var frag = document.createDocumentFragment();
    var nextMarked = false;
    evs.forEach(function (e) {
      var li = row(e);
      var past = e.end <= t;
      var current = e.start <= t && !past;
      var badge = e.mine ? T.demo.fresh : "";
      if (current) badge = L.now;
      else if (!past && !nextMarked) { nextMarked = true; badge = fill(L.in, { d: dur(e.start - t) }); }
      li.classList.toggle("is-past", past);
      li.classList.toggle("is-now", current);
      li.classList.toggle("is-new", !!e.mine && !current);
      $(".day-badge", li).textContent = badge;
      frag.appendChild(li);
    });
    dayEl.replaceChildren(frag);

    var rest = evs.filter(function (e) { return e.end > t; });
    var hr = Math.floor(t / 60);
    var greet = L.greet[hr < 11 ? 0 : hr < 17 ? 1 : hr < 22 ? 2 : 3];
    var text = !rest.length ? L.done : fill(rest.length === 1 ? L.left1 : L.left, {
      n: rest.length, what: rest[0].what, time: fmt(rest[0].start)
    });
    if (summaryEl) summaryEl.textContent = greet + " " + text;
    if (clockEl) clockEl.textContent = fmt(t);
    if (scrubber) scrubber.value = t;
  }

  function renderDateline() {
    if (!datelineEl) return;
    var d = new Intl.DateTimeFormat(T.locale, { weekday: "long", day: "numeric", month: "long" }).format(new Date());
    datelineEl.textContent = d + " · " + fmt(nowMin());
  }

  if (scrubber) {
    scrubber.addEventListener("input", function () {
      userMoved = true;
      t = +scrubber.value;
      renderDay();
    });
  }

  // Minütlich mitlaufen, solange niemand den Regler bewegt hat.
  setInterval(function () {
    renderDateline();
    if (!userMoved) { t = nowMin(); renderDay(); }
  }, 60000);

  renderDateline();
  renderDay();

  // ---------- Satz-Demo ----------
  var TIMES = ["07:30", "12:00", "15:30", "16:45", "17:30", "19:00"];
  var demo = { ti: 4, who: 3, vis: 1 };
  var input = $("[data-demo-what]");
  var timeBtn = $("[data-demo-time]");
  var whoBtn = $("[data-demo-who]");
  var visBtn = $("[data-demo-vis]");
  var addBtn = $("[data-demo-add]");
  var doneLink = $("[data-demo-done]");

  function renderDemo() {
    if (timeBtn) timeBtn.textContent = TIMES[demo.ti];
    if (whoBtn) whoBtn.textContent = L.who[demo.who];
    if (visBtn) visBtn.textContent = demo.vis ? T.demo.fam : T.demo.priv;
    if (input) input.size = Math.max(8, (input.value || input.placeholder).length);
  }
  function edited() { if (doneLink) doneLink.hidden = true; renderDemo(); }

  if (input) input.addEventListener("input", edited);
  if (timeBtn) timeBtn.addEventListener("click", function () { demo.ti = (demo.ti + 1) % TIMES.length; edited(); });
  if (whoBtn) whoBtn.addEventListener("click", function () { demo.who = (demo.who + 1) % L.who.length; edited(); });
  if (visBtn) visBtn.addEventListener("click", function () { demo.vis = demo.vis ? 0 : 1; edited(); });

  function addEvent() {
    var hm = TIMES[demo.ti].split(":");
    var start = +hm[0] * 60 + +hm[1];
    added.push({
      start: start, end: start + 60, who: demo.who, family: !!demo.vis,
      what: (input && input.value.trim()) || T.demo.draft, mine: true
    });
    if (input) input.value = "";
    renderDemo();
    renderDay();
    if (doneLink) doneLink.hidden = false;
  }
  if (addBtn) addBtn.addEventListener("click", addEvent);
  if (input) input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { e.preventDefault(); addEvent(); }
  });

  // ---------- Preise ----------
  var bill = "m";
  var members = 4;
  var amountEl = $("[data-price-amount]");
  var unitEl = $("[data-price-unit]");
  var noteEl = $("[data-price-note]");
  var perHeadEl = $("[data-per-head]");
  var billBtns = $$("[data-bill]");
  var stepBtns = $$("[data-members]");

  function renderPrice() {
    var yearly = bill === "y";
    if (amountEl) amountEl.textContent = money(yearly ? 19.99 : 1.99);
    if (unitEl) unitEl.textContent = yearly ? T.price.perYear : T.price.perMonth;
    if (noteEl) noteEl.textContent = yearly ? fill(T.price.yearNote, { m: money(19.99 / 12) }) : T.price.monthNote;
    if (perHeadEl) perHeadEl.textContent = fill(T.price.perHead, { n: members, p: money((yearly ? 19.99 / 12 : 1.99) / members) });
    billBtns.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.bill === bill)); });
    stepBtns.forEach(function (b) {
      b.disabled = +b.dataset.members < 0 ? members <= 2 : members >= 10;
    });
  }
  billBtns.forEach(function (b) { b.addEventListener("click", function () { bill = b.dataset.bill; renderPrice(); }); });
  stepBtns.forEach(function (b) {
    b.addEventListener("click", function () {
      members = Math.min(10, Math.max(2, members + +b.dataset.members));
      renderPrice();
    });
  });
  renderPrice();
})();

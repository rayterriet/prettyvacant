/* Pretty Vacant, site-logica. Normaal hoef je hier niets aan te veranderen:
   alle inhoud staat in gegevens.js. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, tekst) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (tekst != null) e.textContent = tekst;
    return e;
  }

  /* ---------- Knipletters ---------- */
  var KLEUREN = ['zw', 'wi', 'ro', 'wi', 'zw', 'ge', 'ro', 'zw', 'wi', 'kaal'];
  var FONTS = ['f1', 'f2', 'f3', 'f1', 'f4', 'f3', 'f2'];
  function hash(n) { n = Math.imul(n ^ (n >>> 15), 2246822507); n = Math.imul(n ^ (n >>> 13), 3266489909); return (n ^ (n >>> 16)) >>> 0; }

  function knip(node, zaad) {
    var tekst = node.textContent;
    node.textContent = '';
    var teller = 0;
    tekst.split(/(\s+)/).forEach(function (deel) {
      if (!deel) return;
      if (/^\s+$/.test(deel)) { node.appendChild(document.createTextNode(' ')); return; }
      var woord = el('span', 'woord');
      woord.setAttribute('aria-hidden', 'true');
      Array.from(deel).forEach(function (ch, i) {
        var h = hash(zaad * 7919 + teller * 104729 + ch.charCodeAt(0));
        teller++;
        var s = el('span', 'rl ' + KLEUREN[h % KLEUREN.length] + ' ' + FONTS[(h >>> 4) % FONTS.length]);
        var klein = i > 0 && ((h >>> 9) % 4 === 0) && /[A-Za-z]/.test(ch);
        s.textContent = klein ? ch.toLowerCase() : ch.toUpperCase();
        var rot = ((h >>> 12) % 11) - 5;            // -5..5 graden
        var dy = (((h >>> 16) % 7) - 3) * 0.02;      // kleine sprongetjes
        var sc = 0.9 + ((h >>> 20) % 6) * 0.035;     // iets groter of kleiner
        s.style.transform = 'translateY(' + dy + 'em) rotate(' + rot + 'deg)';
        s.style.fontSize = sc + 'em';
        woord.appendChild(s);
      });
      node.appendChild(woord);
    });
    if (!node.getAttribute('aria-label') && !node.closest('[aria-label]')) node.setAttribute('aria-label', tekst);
  }
  document.querySelectorAll('[data-r]').forEach(function (n, i) { knip(n, i + 3); });

  /* ---------- De band ---------- */
  (typeof LEDEN !== 'undefined' ? LEDEN : []).forEach(function (l, i) {
    if (!l || !l.naam) return;
    var li = el('li', 'lid');
    if (l.foto) {
      var img = el('img', 'lid-foto');
      img.src = 'fotos/' + l.foto; img.alt = l.naam; img.loading = 'lazy';
      li.appendChild(img);
    }
    var naam = el('h3', 'lid-naam ransom', l.naam);
    li.appendChild(naam);
    knip(naam, 40 + i * 5);
    if (l.rol) li.appendChild(el('p', 'lid-rol', l.rol));
    $('leden').appendChild(li);
  });

  /* ---------- Tour ---------- */
  var MAAND = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  var DAG = ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'];
  function datum(s) { var p = String(s).split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }
  var vandaag = new Date(); vandaag.setHours(0, 0, 0, 0);

  var gigs = (typeof TOUR !== 'undefined' ? TOUR : []).filter(function (g) { return g && g.datum; })
    .map(function (g) { return Object.assign({ d: datum(g.datum) }, g); })
    .sort(function (a, b) { return a.d - b.d; });
  var komend = gigs.filter(function (g) { return g.d >= vandaag; });
  var oud = gigs.filter(function (g) { return g.d < vandaag; }).reverse();

  function gigRij(g, metActie) {
    var li = el('li', 'gig');
    var dd = String(g.d.getDate()).padStart(2, '0') + '-' + String(g.d.getMonth() + 1).padStart(2, '0');
    var t = el('time', 'gig-datum', dd);
    t.setAttribute('datetime', g.datum);
    li.appendChild(t);
    var wat = el('div', 'gig-wat');
    wat.appendChild(el('div', 'gig-zaal', g.zaal || ''));
    var meta = DAG[g.d.getDay()] + ' ' + g.d.getDate() + ' ' + MAAND[g.d.getMonth()] + ' ' + g.d.getFullYear();
    if (g.plaats) meta += ', ' + g.plaats;
    if (g.tijd) meta += ', ' + g.tijd + ' uur';
    wat.appendChild(el('div', 'gig-meta', meta));
    li.appendChild(wat);
    if (metActie) {
      var actie = el('div', 'gig-actie');
      if (g.voorbeeld) actie.appendChild(el('span', 'chip voorbeeld', 'Voorbeeld'));
      else if (g.status === 'uitverkocht') actie.appendChild(el('span', 'chip uitverkocht', 'Uitverkocht'));
      else if (g.tickets) {
        var a = el('a', 'chip', 'Tickets');
        a.href = g.tickets; a.target = '_blank'; a.rel = 'noopener';
        actie.appendChild(a);
      } else if (g.status === 'gratis') actie.appendChild(el('span', 'chip gratis', 'Gratis'));
      else if (g.status === 'besloten') actie.appendChild(el('span', 'chip besloten', 'Besloten'));
      if (actie.childNodes.length) li.appendChild(actie);
    }
    return li;
  }
  komend.forEach(function (g) { $('gigs').appendChild(gigRij(g, true)); });
  $('gigs-leeg').hidden = komend.length > 0;
  if (oud.length) {
    oud.forEach(function (g) { $('gigs-oud').appendChild(gigRij(g, false)); });
    $('eerder').hidden = false;
  }
  if (komend.length) {
    var v = komend[0];
    $('volgende').textContent = 'Eerstvolgende: ' + v.d.getDate() + ' ' + MAAND[v.d.getMonth()] + ', ' + v.zaal + (v.plaats ? ', ' + v.plaats : '');
    $('volgende').hidden = false;
  }

  /* ---------- Video ---------- */
  var videos = typeof VIDEOS !== 'undefined' ? VIDEOS : [];
  videos.forEach(function (v) {
    if (!v || !v.id) return;
    var fig = el('figure', 'video');
    var knop = el('button', 'video-speler');
    knop.type = 'button';
    knop.setAttribute('aria-label', 'Speel video af: ' + (v.titel || ''));
    var img = el('img');
    img.src = 'https://i.ytimg.com/vi/' + encodeURIComponent(v.id) + '/hqdefault.jpg';
    img.alt = ''; img.loading = 'lazy';
    knop.appendChild(img);
    knop.appendChild(el('span', 'speel', 'Play'));
    knop.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(v.id) + '?autoplay=1&rel=0';
      f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      f.allowFullscreen = true;
      f.title = v.titel || 'Video';
      knop.replaceChildren(f);
    }, { once: true });
    fig.appendChild(knop);
    if (v.titel) fig.appendChild(el('figcaption', null, v.titel));
    $('videos').appendChild(fig);
  });
  $('videos-leeg').hidden = $('videos').children.length > 0;

  /* ---------- Foto's ---------- */
  var lb = $('lichtbak');
  (typeof FOTOS !== 'undefined' ? FOTOS : []).forEach(function (f) {
    if (!f || !f.bestand) return;
    var fig = el('figure', 'foto');
    var b = el('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'Vergroot: ' + (f.onderschrift || f.bestand));
    var img = el('img');
    img.src = 'fotos/' + f.bestand; img.alt = f.onderschrift || ''; img.loading = 'lazy';
    b.appendChild(img);
    b.addEventListener('click', function () {
      $('lichtbak-img').src = img.src;
      $('lichtbak-img').alt = img.alt;
      $('lichtbak-tekst').textContent = f.onderschrift || '';
      if (lb.showModal) lb.showModal(); else lb.setAttribute('open', '');
    });
    fig.appendChild(b);
    if (f.onderschrift) fig.appendChild(el('figcaption', null, f.onderschrift));
    $('foto-grid').appendChild(fig);
  });
  $('poster-knop').addEventListener('click', function () {
    var img = this.querySelector('img');
    $('lichtbak-img').src = img.src; $('lichtbak-img').alt = img.alt;
    $('lichtbak-tekst').textContent = 'Tourposter';
    if (lb.showModal) lb.showModal(); else lb.setAttribute('open', '');
  });
  $('sluit').addEventListener('click', function () { lb.close ? lb.close() : lb.removeAttribute('open'); });
  lb.addEventListener('click', function (e) { if (e.target === lb && lb.close) lb.close(); });

  /* ---------- Riders ---------- */
  (typeof RIDERS !== 'undefined' ? RIDERS : []).forEach(function (r) {
    var li = el('li', 'rider');
    var t = el('div');
    t.appendChild(el('div', 'rider-titel', r.titel));
    if (r.omschrijving) t.appendChild(el('div', 'rider-tekst', r.omschrijving));
    li.appendChild(t);
    if (r.bestand) {
      var a = el('a', 'chip', 'Download PDF');
      a.href = 'riders/' + r.bestand; a.target = '_blank'; a.rel = 'noopener';
      li.appendChild(a);
    } else {
      li.appendChild(el('span', 'chip op-aanvraag', 'Op aanvraag'));
    }
    $('riders-lijst').appendChild(li);
  });

  /* ---------- Contact ---------- */
  if (typeof BAND !== 'undefined') {
    $('mail').textContent = BAND.email;
    $('mail').href = 'mailto:' + BAND.email;
    $('ig').href = BAND.instagram; $('ig-link-video').href = BAND.instagram;
    $('ig-naam').textContent = BAND.instagramNaam || '';
    $('fb').href = BAND.facebook;
  }
  $('kopieer').addEventListener('click', function () {
    var knop = this;
    function klaar(t) { knop.textContent = t; setTimeout(function () { knop.textContent = 'Kopieer'; }, 1800); }
    function selecteer() {
      var r = document.createRange(); r.selectNodeContents($('mail'));
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      klaar('Geselecteerd');
    }
    try {
      navigator.clipboard.writeText(BAND.email).then(function () { klaar('Gekopieerd'); }, selecteer);
    } catch (e) { selecteer(); }
  });
})();

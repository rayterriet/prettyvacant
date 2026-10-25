/* Pretty Vacant, site-logica. Normaal hoef je hier niets aan te veranderen:
   alle inhoud staat in gegevens.js. Vaste teksten van de site (NL en UK)
   staan hieronder in TEKSTEN. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, tekst) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (tekst != null) e.textContent = tekst;
    return e;
  }

  /* ---------- Teksten ---------- */
  var TEKSTEN = {
    nl: {
      'top': 'Pretty Vacant, naar boven',
      'menu': 'Hoofdmenu',
      'nav.fotos': "Foto's",
      'nav.boek': 'Boeken',
      'hero.intro': 'Vijftig jaar na het album dat alles op zijn kop zette, staan vier enthousiaste muzikanten op het podium met de nummers van de Sex Pistols. Hard, snel en luid, zoals het hoort.',
      'hero.boek': 'Boek de band',
      'hero.tour': 'Tourdata',
      'volgende': 'Eerstvolgende',
      'band.kop': 'De band',
      'band.intro': 'Vier enthousiaste muzikanten die de nummers van de Sex Pistols weer live laten horen.',
      'tour.leeg': 'Nieuwe data volgen binnenkort. More to come…',
      'tour.meer': 'More to come… Jullie zaal erbij? <a href="#contact">Neem contact op</a>.',
      'tour.eerder': 'Eerder gespeeld',
      'tour.poster': 'Vergroot de tourposter',
      'tour.postertitel': 'Tourposter',
      'uur': ' uur',
      'voorprogramma': 'Voorprogramma',
      'chip.voorbeeld': 'Voorbeeld', 'chip.uitverkocht': 'Uitverkocht', 'chip.gratis': 'Gratis', 'chip.besloten': 'Besloten', 'chip.tickets': 'Tickets',
      'video.binnenkort': 'Binnenkort',
      'video.leeg': 'De eerste livebeelden komen hier te staan.<br>Volg ons intussen op <a class="ig-link" href="#">Instagram</a>.',
      'video.speel': 'Speel video af: ',
      'fotos.kop': "Foto's",
      'fotos.vergroot': 'Vergroot: ',
      'riders.intro': 'Voor organisatoren en technici. Staat er iets niet bij of heb je een vraag over de techniek? Mail ons gerust.',
      'riders.download': 'Download PDF',
      'riders.aanvraag': 'Op aanvraag',
      'contact.kop': 'Boeken & contact',
      'contact.intro': 'Café, club, festival of feest: we komen graag langs. Stuur een mail met datum, plaats en een idee van de zaal, dan reageren we snel.',
      'contact.mail': 'Mail',
      'contact.volg': 'Volg ons',
      'kopieer': 'Kopieer', 'gekopieerd': 'Gekopieerd', 'geselecteerd': 'Geselecteerd',
      'voet': 'Een tribute, geen officiële Sex Pistols-band.',
      'sluit': 'Sluiten',
      'maanden': ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
      'dagen': ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za']
    },
    en: {
      'top': 'Pretty Vacant, back to top',
      'menu': 'Main menu',
      'nav.fotos': 'Photos',
      'nav.boek': 'Booking',
      'hero.intro': 'Fifty years after the album that turned everything upside down, four enthusiastic musicians take the stage with the songs of the Sex Pistols. Loud, fast and raw, the way it should be.',
      'hero.boek': 'Book the band',
      'hero.tour': 'Tour dates',
      'volgende': 'Next up',
      'band.kop': 'The band',
      'band.intro': 'Four enthusiastic musicians bringing the songs of the Sex Pistols back to the stage.',
      'tour.leeg': 'New dates coming soon. More to come…',
      'tour.meer': 'More to come… Want us at your venue? <a href="#contact">Get in touch</a>.',
      'tour.eerder': 'Previous shows',
      'tour.poster': 'Enlarge the tour poster',
      'tour.postertitel': 'Tour poster',
      'uur': '',
      'voorprogramma': 'Support',
      'chip.voorbeeld': 'Example', 'chip.uitverkocht': 'Sold out', 'chip.gratis': 'Free entry', 'chip.besloten': 'Private', 'chip.tickets': 'Tickets',
      'video.binnenkort': 'Coming soon',
      'video.leeg': 'Our first live footage will appear here.<br>In the meantime, follow us on <a class="ig-link" href="#">Instagram</a>.',
      'video.speel': 'Play video: ',
      'fotos.kop': 'Photos',
      'fotos.vergroot': 'Enlarge: ',
      'riders.intro': 'For promoters and technicians. Missing something, or got a question about the tech? Just drop us a line.',
      'riders.download': 'Download PDF',
      'riders.aanvraag': 'On request',
      'contact.kop': 'Booking & contact',
      'contact.intro': "Pub, club, festival or party: we'd love to come and play. Send us an email with the date, the place and a bit about the venue, and we'll get back to you quickly.",
      'contact.mail': 'Email',
      'contact.volg': 'Follow us',
      'kopieer': 'Copy', 'gekopieerd': 'Copied', 'geselecteerd': 'Selected',
      'voet': 'A tribute, not an official Sex Pistols band.',
      'sluit': 'Close',
      'maanden': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      'dagen': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
  };

  function startTaal() {
    try { var t = localStorage.getItem('pv-taal'); if (t === 'nl' || t === 'en') return t; } catch (e) {}
    var talen = navigator.languages || [navigator.language || 'nl'];
    return /^nl\b/i.test(talen[0] || '') ? 'nl' : 'en';
  }
  var taal = startTaal();
  function T(k) { return TEKSTEN[taal][k] != null ? TEKSTEN[taal][k] : TEKSTEN.nl[k]; }
  // Kies het Engelse veld (bv. rol_en) als dat bestaat en de site op UK staat.
  function V(obj, veld) { return (taal === 'en' && obj[veld + '_en']) ? obj[veld + '_en'] : obj[veld]; }

  /* ---------- Knipletters ---------- */
  var KLEUREN = ['zw', 'wi', 'ro', 'wi', 'zw', 'ge', 'ro', 'zw', 'wi', 'kaal'];
  var FONTS = ['f1', 'f2', 'f3', 'f1', 'f4', 'f3', 'f2'];
  function hash(n) { n = Math.imul(n ^ (n >>> 15), 2246822507); n = Math.imul(n ^ (n >>> 13), 3266489909); return (n ^ (n >>> 16)) >>> 0; }

  function knip(node, zaad, tekst) {
    if (tekst == null) tekst = node.textContent;
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
    if (!node.closest('h1[aria-label]') || node.tagName === 'H1') node.setAttribute('aria-label', tekst);
  }
  // Onthoud de oorspronkelijke tekst van elke knipletter-kop.
  var koppen = Array.from(document.querySelectorAll('[data-r]'));
  koppen.forEach(function (n) { n.dataset.bron = n.textContent; });
  function knipKoppen() {
    koppen.forEach(function (n, i) {
      var tekst = n.dataset.t ? T(n.dataset.t) : n.dataset.bron;
      knip(n, i + 3, tekst);
    });
  }

  /* ---------- Vaste teksten ---------- */
  function vasteTeksten() {
    document.documentElement.lang = taal === 'en' ? 'en-GB' : 'nl';
    document.querySelectorAll('[data-t]:not([data-r])').forEach(function (n) { n.textContent = T(n.dataset.t); });
    document.querySelectorAll('[data-th]').forEach(function (n) { n.innerHTML = T(n.dataset.th); });
    document.querySelectorAll('[data-ta]').forEach(function (n) {
      var p = n.dataset.ta.split(':'); n.setAttribute(p[0], T(p[1]));
    });
    document.querySelectorAll('.ig-link').forEach(function (a) {
      if (typeof BAND !== 'undefined') { a.href = BAND.instagram; a.target = '_blank'; a.rel = 'noopener'; }
    });
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === taal));
    });
  }

  /* ---------- De band ---------- */
  function band() {
    $('leden').replaceChildren();
    (typeof LEDEN !== 'undefined' ? LEDEN : []).forEach(function (l, i) {
      if (!l || !l.naam) return;
      var li = el('li', 'lid');
      if (l.foto) {
        var img = el('img', 'lid-foto');
        img.src = 'fotos/' + l.foto; img.alt = l.naam; img.loading = 'lazy';
        li.appendChild(img);
      }
      var naam = el('h3', 'lid-naam ransom');
      li.appendChild(naam);
      knip(naam, 40 + i * 5, l.naam);
      if (l.rol) li.appendChild(el('p', 'lid-rol', V(l, 'rol')));
      $('leden').appendChild(li);
    });
  }

  /* ---------- Tour ---------- */
  function datum(s) { var p = String(s).split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }
  var vandaag = new Date(); vandaag.setHours(0, 0, 0, 0);
  var gigs = (typeof TOUR !== 'undefined' ? TOUR : []).filter(function (g) { return g && g.datum; })
    .map(function (g) { return Object.assign({ d: datum(g.datum) }, g); })
    .sort(function (a, b) { return a.d - b.d; });
  var komend = gigs.filter(function (g) { return g.d >= vandaag; });
  var oud = gigs.filter(function (g) { return g.d < vandaag; }).reverse();

  function gigRij(g, metActie) {
    var M = T('maanden'), D = T('dagen');
    var li = el('li', 'gig');
    var dd = String(g.d.getDate()).padStart(2, '0') + '-' + String(g.d.getMonth() + 1).padStart(2, '0');
    var t = el('time', 'gig-datum', dd);
    t.setAttribute('datetime', g.datum);
    li.appendChild(t);
    var wat = el('div', 'gig-wat');
    wat.appendChild(el('div', 'gig-zaal', V(g, 'zaal') || ''));
    var meta = D[g.d.getDay()] + ' ' + g.d.getDate() + ' ' + M[g.d.getMonth()] + ' ' + g.d.getFullYear();
    if (g.plaats) meta += ', ' + V(g, 'plaats');
    if (g.tijd) meta += ', ' + g.tijd + T('uur');
    wat.appendChild(el('div', 'gig-meta', meta));
    if (g.voorprogramma) {
      var vp = T('voorprogramma') + ': ' + V(g, 'voorprogramma') + (g.voorprogramma_tijd ? ', ' + g.voorprogramma_tijd + T('uur') : '');
      wat.appendChild(el('div', 'gig-meta gig-support', vp));
    }
    li.appendChild(wat);
    if (metActie) {
      var actie = el('div', 'gig-actie');
      if (g.voorbeeld) actie.appendChild(el('span', 'chip voorbeeld', T('chip.voorbeeld')));
      else if (g.status === 'uitverkocht') actie.appendChild(el('span', 'chip uitverkocht', T('chip.uitverkocht')));
      else if (g.tickets) {
        var a = el('a', 'chip', T('chip.tickets'));
        a.href = g.tickets; a.target = '_blank'; a.rel = 'noopener';
        actie.appendChild(a);
      } else if (g.status === 'gratis') actie.appendChild(el('span', 'chip gratis', T('chip.gratis')));
      else if (g.status === 'besloten') actie.appendChild(el('span', 'chip besloten', T('chip.besloten')));
      if (actie.childNodes.length) li.appendChild(actie);
    }
    return li;
  }
  function tour() {
    $('gigs').replaceChildren(); $('gigs-oud').replaceChildren();
    komend.forEach(function (g) { $('gigs').appendChild(gigRij(g, true)); });
    $('gigs-leeg').hidden = komend.length > 0;
    if (oud.length) {
      oud.forEach(function (g) { $('gigs-oud').appendChild(gigRij(g, false)); });
      $('eerder').hidden = false;
    }
    if (komend.length) {
      var v = komend[0];
      $('volgende').textContent = T('volgende') + ': ' + v.d.getDate() + ' ' + T('maanden')[v.d.getMonth()] + ', ' + V(v, 'zaal') + (v.plaats ? ', ' + V(v, 'plaats') : '');
      $('volgende').hidden = false;
    }
  }

  /* ---------- Video ---------- */
  function video() {
    $('videos').replaceChildren();
    (typeof VIDEOS !== 'undefined' ? VIDEOS : []).forEach(function (v) {
      if (!v || (!v.id && !v.bestand)) return;
      var titel = V(v, 'titel') || '';
      var fig = el('figure', 'video');
      var knop = el('button', 'video-speler');
      knop.type = 'button';
      knop.setAttribute('aria-label', T('video.speel') + titel);
      var img = el('img');
      img.src = v.bestand
        ? (v.poster ? 'video/' + v.poster : '')
        : 'https://i.ytimg.com/vi/' + encodeURIComponent(v.id) + '/hqdefault.jpg';
      img.alt = ''; img.loading = 'lazy';
      if (img.src) knop.appendChild(img);
      knop.appendChild(el('span', 'speel', 'Play'));
      knop.addEventListener('click', function () {
        var f;
        if (v.bestand) {
          // Eigen videobestand uit de map "video"
          f = document.createElement('video');
          f.src = 'video/' + v.bestand;
          if (v.poster) f.poster = 'video/' + v.poster;
          f.controls = true; f.autoplay = true; f.playsInline = true;
          f.setAttribute('aria-label', titel || 'Video');
        } else {
          f = document.createElement('iframe');
          f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(v.id) + '?autoplay=1&rel=0';
          f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
          f.allowFullscreen = true;
          f.title = titel || 'Video';
        }
        knop.replaceChildren(f);
        if (f.play) { var p = f.play(); if (p && p.catch) p.catch(function () {}); }
      }, { once: true });
      fig.appendChild(knop);
      if (titel) fig.appendChild(el('figcaption', null, titel));
      $('videos').appendChild(fig);
    });
    $('videos-leeg').hidden = $('videos').children.length > 0;
  }

  /* ---------- Foto's ---------- */
  var lb = $('lichtbak');
  function toon(src, alt, tekst) {
    $('lichtbak-img').src = src; $('lichtbak-img').alt = alt || '';
    $('lichtbak-tekst').textContent = tekst || '';
    if (lb.showModal) lb.showModal(); else lb.setAttribute('open', '');
  }
  function fotos() {
    $('foto-grid').replaceChildren();
    (typeof FOTOS !== 'undefined' ? FOTOS : []).forEach(function (f) {
      if (!f || !f.bestand) return;
      var onder = V(f, 'onderschrift') || '';
      var fig = el('figure', 'foto');
      var b = el('button');
      b.type = 'button';
      b.setAttribute('aria-label', T('fotos.vergroot') + (onder || f.bestand));
      var img = el('img');
      img.src = 'fotos/' + f.bestand; img.alt = onder; img.loading = 'lazy';
      b.appendChild(img);
      b.addEventListener('click', function () { toon(img.src, img.alt, onder); });
      fig.appendChild(b);
      if (onder) fig.appendChild(el('figcaption', null, onder));
      $('foto-grid').appendChild(fig);
    });
  }
  $('poster-knop').addEventListener('click', function () {
    var img = this.querySelector('img');
    toon(img.src, img.alt, T('tour.postertitel'));
  });
  $('sluit').addEventListener('click', function () { lb.close ? lb.close() : lb.removeAttribute('open'); });
  lb.addEventListener('click', function (e) { if (e.target === lb && lb.close) lb.close(); });

  /* ---------- Riders ---------- */
  function riders() {
    $('riders-lijst').replaceChildren();
    (typeof RIDERS !== 'undefined' ? RIDERS : []).forEach(function (r) {
      var li = el('li', 'rider');
      var t = el('div');
      t.appendChild(el('div', 'rider-titel', V(r, 'titel')));
      if (r.omschrijving) t.appendChild(el('div', 'rider-tekst', V(r, 'omschrijving')));
      li.appendChild(t);
      var bestand = V(r, 'bestand');
      if (bestand) {
        var a = el('a', 'chip', T('riders.download'));
        a.href = 'riders/' + bestand; a.target = '_blank'; a.rel = 'noopener'; a.setAttribute('download', bestand);
        li.appendChild(a);
      } else {
        li.appendChild(el('span', 'chip op-aanvraag', T('riders.aanvraag')));
      }
      $('riders-lijst').appendChild(li);
    });
  }

  /* ---------- Contact ---------- */
  if (typeof BAND !== 'undefined') {
    $('mail').textContent = BAND.email;
    $('mail').href = 'mailto:' + BAND.email;
    $('ig').href = BAND.instagram;
    $('ig-naam').textContent = BAND.instagramNaam || '';
    $('fb').href = BAND.facebook;
  }
  $('kopieer').addEventListener('click', function () {
    var knop = this;
    function klaar(k) { knop.textContent = T(k); setTimeout(function () { knop.textContent = T('kopieer'); }, 1800); }
    function selecteer() {
      var r = document.createRange(); r.selectNodeContents($('mail'));
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      klaar('geselecteerd');
    }
    try {
      navigator.clipboard.writeText(BAND.email).then(function () { klaar('gekopieerd'); }, selecteer);
    } catch (e) { selecteer(); }
  });

  /* ---------- Vindbaarheid: optredens als gestructureerde gegevens voor Google ---------- */
  (function () {
    if (!komend.length) return;
    var events = komend.filter(function (g) { return !g.voorbeeld; }).map(function (g) {
      var ev = {
        '@type': 'MusicEvent',
        'name': 'Pretty Vacant, Sex Pistols tribute' + (g.zaal ? ' in ' + g.zaal : ''),
        'startDate': g.datum + (g.tijd ? 'T' + g.tijd : ''),
        'endDate': g.einddatum || g.datum,
        'eventStatus': 'https://schema.org/EventScheduled',
        'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
        'location': {
          '@type': 'Place',
          'name': g.zaal || g.plaats,
          'address': { '@type': 'PostalAddress', 'addressLocality': g.plaats || '', 'addressCountry': 'NL' }
        },
        'image': 'https://prettyvacant.nl/img/deelbeeld.jpg',
        'description': 'Pretty Vacant speelt de nummers van de Sex Pistols live.',
        'performer': { '@type': 'MusicGroup', '@id': 'https://prettyvacant.nl/#band', 'name': 'Pretty Vacant' },
        'organizer': { '@type': 'Organization', 'name': g.zaal || 'Pretty Vacant', 'url': g.tickets || 'https://prettyvacant.nl/' },
        'url': g.tickets || 'https://prettyvacant.nl/#tour'
      };
      if (g.tickets || g.status === 'gratis' || g.prijs != null) {
        ev.offers = {
          '@type': 'Offer',
          'url': g.tickets || 'https://prettyvacant.nl/#tour',
          'price': g.status === 'gratis' ? 0 : (g.prijs != null ? g.prijs : undefined),
          'priceCurrency': 'EUR',
          'availability': g.status === 'uitverkocht' ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock'
        };
        if (ev.offers.price === undefined) delete ev.offers.price;
      }
      return ev;
    });
    var sc = document.createElement('script');
    sc.type = 'application/ld+json';
    sc.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': events });
    document.head.appendChild(sc);
  })();

  /* ---------- Alles tekenen, en opnieuw bij taalwissel ---------- */
  function teken() {
    vasteTeksten(); knipKoppen(); band(); tour(); video(); fotos(); riders();
  }
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      if (b.dataset.lang === taal) return;
      taal = b.dataset.lang;
      try { localStorage.setItem('pv-taal', taal); } catch (e) {}
      teken();
    });
  });
  teken();
})();

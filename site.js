/* Pretty Vacant, site-logica. Normaal hoef je hier niets aan te veranderen:
   alle inhoud staat in gegevens.js. Vaste teksten van de site (NL, UK en DE)
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
      'contact.gigstarter': 'Boek via Gigstarter',
      'fotos.leeg': "Binnenkort hier de eerste livefoto's.<br>Volg ons intussen op <a class=\"ig-link\" href=\"#\">Instagram</a>.",
      'band.fotoalt': 'Pretty Vacant voor een versleten Union Jack. Van links naar rechts: Jurrien, Ronald, Ray en Arthur',
      'nav.muziek': 'Muziek',
      'muziek.kop': 'Muziek',
      'muziek.intro': "Wil je weten hoe wij klinken? Luister dan naar onze demo's, live opgenomen tijdens onze repetities.",
      'muziek.live': 'Live spelen wij hun enige album, Never Mind the Bollocks, aangevuld met unieke nummers en covers die de originele Sex Pistols ook gespeeld hebben.',
      'muziek.demo': 'Live', 'muziek.fotoalt': 'Onze handgeschreven setlijst, vastgeplakt op het podium naast een gitaarversterker en een effectpedaal',
      'muziek.legenda': '= live opgenomen demo, druk op de sticker om te luisteren',
      'muziek.speel': 'Speel demo: ', 'muziek.pauze': 'Pauzeer demo: ',
      'top': 'Pretty Vacant, naar boven',
      'menu': 'Hoofdmenu',
      'nav.fotos': "Foto's",
      'nav.boek': 'Boeken',
      'hero.intro': 'Vijftig jaar na het album dat alles op zijn kop zette, staan vier enthousiaste muzikanten op het podium met de nummers van de Sex Pistols. Hard, snel en luid, zoals het hoort.',
      'hero.boek': 'Boek de band',
      'hero.tour': 'Tourdata',
      'volgende': 'Eerstvolgende',
      'band.kop': 'De band',
      'band.intro': 'Vier enthousiaste en ervaren muzikanten die met veel passie en energie de muziek van de Sex Pistols laten herleven.',
      'tour.leeg': 'Nieuwe data volgen binnenkort. More to come…',
      'tour.meer': 'More to come… Jullie zaal erbij? <a href="#contact">Neem contact op</a>.',
      'tour.eerder': 'Eerder gespeeld',
      'tour.poster': 'Vergroot de tourposter',
      'tour.postertitel': 'Tourposter',
      'uur': ' uur',
      'voorprogramma': 'Voorprogramma',
      'chip.voorbeeld': 'Voorbeeld', 'chip.uitverkocht': 'Uitverkocht', 'chip.gratis': 'Gratis', 'chip.besloten': 'Besloten', 'chip.tickets': 'Tickets', 'chip.prijs': 'Entree € {p}',
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
      'contact.persoon': 'Contactpersoon',
      'kopieer': 'Kopieer', 'gekopieerd': 'Gekopieerd', 'geselecteerd': 'Geselecteerd',
      'voet': 'Een tribute, geen officiële Sex Pistols-band.',
      'sluit': 'Sluiten',
      'maanden': ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
      'dagen': ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za']
    },
    en: {
      'contact.gigstarter': 'Book via Gigstarter',
      'fotos.leeg': 'Live photos coming soon.<br>In the meantime, follow us on <a class="ig-link" href="#">Instagram</a>.',
      'band.fotoalt': 'Pretty Vacant in front of a worn Union Jack. From left to right: Jurrien, Ronald, Ray and Arthur',
      'nav.muziek': 'Music',
      'muziek.kop': 'Music',
      'muziek.intro': 'Want to know what we sound like? Then listen to our demos, recorded live at our rehearsals.',
      'muziek.live': 'Live, we play their one and only album, Never Mind the Bollocks, plus rare songs and covers the original Sex Pistols played too.',
      'muziek.demo': 'Live', 'muziek.fotoalt': 'Our handwritten setlist, taped to the stage next to a guitar amp and an effects pedal',
      'muziek.legenda': '= demo recorded live, hit the sticker to listen',
      'muziek.speel': 'Play demo: ', 'muziek.pauze': 'Pause demo: ',
      'top': 'Pretty Vacant, back to top',
      'menu': 'Main menu',
      'nav.fotos': 'Photos',
      'nav.boek': 'Booking',
      'hero.intro': 'Fifty years after the album that turned everything upside down, four enthusiastic musicians take the stage with the songs of the Sex Pistols. Loud, fast and raw, the way it should be.',
      'hero.boek': 'Book the band',
      'hero.tour': 'Tour dates',
      'volgende': 'Next up',
      'band.kop': 'The band',
      'band.intro': 'Four enthusiastic and experienced musicians bringing the music of the Sex Pistols back to life with plenty of passion and energy.',
      'tour.leeg': 'New dates coming soon. More to come…',
      'tour.meer': 'More to come… Want us at your venue? <a href="#contact">Get in touch</a>.',
      'tour.eerder': 'Previous shows',
      'tour.poster': 'Enlarge the tour poster',
      'tour.postertitel': 'Tour poster',
      'uur': '',
      'voorprogramma': 'Support',
      'chip.voorbeeld': 'Example', 'chip.uitverkocht': 'Sold out', 'chip.gratis': 'Free entry', 'chip.besloten': 'Private', 'chip.tickets': 'Tickets', 'chip.prijs': 'Entry € {p}',
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
      'contact.persoon': 'Contact person',
      'kopieer': 'Copy', 'gekopieerd': 'Copied', 'geselecteerd': 'Selected',
      'voet': 'A tribute, not an official Sex Pistols band.',
      'sluit': 'Close',
      'maanden': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      'dagen': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    de: {
      'contact.gigstarter': 'Über Gigstarter buchen',
      'fotos.leeg': 'Livefotos folgen bald.<br>Folgt uns bis dahin auf <a class="ig-link" href="#">Instagram</a>.',
      'band.fotoalt': 'Pretty Vacant vor einem verschlissenen Union Jack. Von links nach rechts: Jurrien, Ronald, Ray und Arthur',
      'nav.muziek': 'Musik',
      'muziek.kop': 'Musik',
      'muziek.intro': 'Ihr wollt wissen, wie wir klingen? Dann hört euch unsere Demos an, live aufgenommen bei unseren Proben.',
      'muziek.live': 'Live spielen wir ihr einziges Album, Never Mind the Bollocks, ergänzt um seltene Songs und Coverversionen, die auch die originalen Sex Pistols gespielt haben.',
      'muziek.demo': 'Live', 'muziek.fotoalt': 'Unsere handgeschriebene Setlist, auf die Bühne geklebt neben einem Gitarrenverstärker und einem Effektpedal',
      'muziek.legenda': '= live aufgenommenes Demo, auf den Sticker drücken zum Anhören',
      'muziek.speel': 'Demo abspielen: ', 'muziek.pauze': 'Demo pausieren: ',
      'top': 'Pretty Vacant, nach oben',
      'menu': 'Hauptmenü',
      'nav.fotos': 'Fotos',
      'nav.boek': 'Buchen',
      'hero.intro': 'Fünfzig Jahre nach dem Album, das alles auf den Kopf stellte, stehen vier begeisterte Musiker mit den Songs der Sex Pistols auf der Bühne. Hart, schnell und laut, so wie es sich gehört.',
      'hero.boek': 'Band buchen',
      'hero.tour': 'Tourdaten',
      'volgende': 'Nächster Gig',
      'band.kop': 'Die Band',
      'band.intro': 'Vier begeisterte und erfahrene Musiker, die die Musik der Sex Pistols mit viel Leidenschaft und Energie wieder aufleben lassen.',
      'tour.leeg': 'Neue Termine folgen bald. More to come…',
      'tour.meer': 'More to come… Wollt ihr uns in eurem Laden? <a href="#contact">Meldet euch</a>.',
      'tour.eerder': 'Bisherige Konzerte',
      'tour.poster': 'Tourposter vergrößern',
      'tour.postertitel': 'Tourposter',
      'uur': ' Uhr',
      'voorprogramma': 'Vorband',
      'chip.voorbeeld': 'Beispiel', 'chip.uitverkocht': 'Ausverkauft', 'chip.gratis': 'Eintritt frei', 'chip.besloten': 'Geschlossene Gesellschaft', 'chip.tickets': 'Tickets', 'chip.prijs': 'Eintritt {p} €',
      'video.binnenkort': 'Demnächst',
      'video.leeg': 'Hier erscheinen bald die ersten Livebilder.<br>Folgt uns bis dahin auf <a class="ig-link" href="#">Instagram</a>.',
      'video.speel': 'Video abspielen: ',
      'fotos.kop': 'Fotos',
      'fotos.vergroot': 'Vergrößern: ',
      'riders.intro': 'Für Veranstalter und Techniker. Fehlt etwas oder gibt es Fragen zur Technik? Schreibt uns einfach.',
      'riders.download': 'PDF herunterladen',
      'riders.aanvraag': 'Auf Anfrage',
      'contact.kop': 'Booking & Kontakt',
      'contact.intro': 'Kneipe, Club, Festival oder Party: wir kommen gern vorbei. Schickt uns eine Mail mit Datum, Ort und ein paar Infos zum Laden, dann melden wir uns schnell.',
      'contact.mail': 'Mail',
      'contact.volg': 'Folgt uns',
      'contact.persoon': 'Ansprechpartner',
      'kopieer': 'Kopieren', 'gekopieerd': 'Kopiert', 'geselecteerd': 'Markiert',
      'voet': 'Eine Tribute-Band, keine offizielle Sex-Pistols-Band.',
      'sluit': 'Schließen',
      'maanden': ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'],
      'dagen': ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
    }
  };

  function startTaal() {
    try { var t = localStorage.getItem('pv-taal'); if (t === 'nl' || t === 'en' || t === 'de') return t; } catch (e) {}
    var talen = navigator.languages || [navigator.language || 'nl'];
    var eerste = talen[0] || '';
    return /^nl\b/i.test(eerste) ? 'nl' : /^de\b/i.test(eerste) ? 'de' : 'en';
  }
  var taal = startTaal();
  function T(k) { return TEKSTEN[taal][k] != null ? TEKSTEN[taal][k] : TEKSTEN.nl[k]; }
  // Kies het Engelse veld (bv. rol_en) of Duitse veld (bv. rol_de) als dat bestaat.
  // Staat de site op Duits en is er geen _de-veld, dan valt hij terug op Engels.
  function V(obj, veld) {
    if (taal === 'de' && obj[veld + '_de']) return obj[veld + '_de'];
    if ((taal === 'en' || taal === 'de') && obj[veld + '_en']) return obj[veld + '_en'];
    return obj[veld];
  }

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
    document.documentElement.lang = taal === 'en' ? 'en-GB' : taal === 'de' ? 'de' : 'nl';
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
      var li = el('li', 'lid' + (l.plek ? ' op-foto' : ''));
      if (l.plek) { li.style.left = l.plek[0] + '%'; li.style.top = l.plek[1] + '%'; li.style.setProperty('--draai', [-4, 3, -2, 4][i % 4] + 'deg'); }
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
      else if (g.prijs != null) actie.appendChild(el('span', 'chip gratis prijs', T('chip.prijs').replace('{p}', String(g.prijs).replace('.', taal === 'en' ? '.' : ','))));
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
    $('fotos-leeg').hidden = $('foto-grid').children.length > 0;
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
    if (BAND.youtube) { $('yt').href = BAND.youtube; $('yt-naam').textContent = BAND.youtubeNaam || ''; }
    else $('yt').parentNode.hidden = true;
  }
  // Contactpersoon: NL toont 06-nummer, UK en DE het internationale nummer.
  function contactPersoon() {
    if (typeof BAND === 'undefined' || !BAND.contactTel) { $('persoon-naam').parentNode.hidden = true; return; }
    $('persoon-naam').textContent = BAND.contactNaam || '';
    $('tel').href = 'tel:' + BAND.contactTel;
    $('tel').textContent = taal === 'nl' ? (BAND.contactTelTekst || BAND.contactTel)
      : BAND.contactTel.replace(/^\+31(6)(\d{2})(\d{2})(\d{2})(\d{2})$/, '+31 $1 $2 $3 $4 $5');
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


  /* ---------- Muziek: tracklist met demo's ---------- */
  var speler = new Audio(); speler.preload = 'none';
  var actief = null;
  function knopStand(knop, speelt) {
    knop.classList.toggle('speelt', speelt);
    knop.setAttribute('aria-pressed', speelt ? 'true' : 'false');
    knop.setAttribute('aria-label', T(speelt ? 'muziek.pauze' : 'muziek.demo-knop') + knop.dataset.titel);
  }
  function tekenTracks() {
    var lijst = $('tracks'), beeld = $('setlist-beeld'); if (!lijst || !beeld) return;
    lijst.textContent = '';
    beeld.querySelectorAll('.sticker').forEach(function (n) { n.remove(); });
    (typeof MUZIEK !== 'undefined' ? MUZIEK : []).forEach(function (n, i) {
      lijst.appendChild(el('li', null, n.titel));
      if (!n.demo || !n.plek) return;
      var markeer = el('button', 'markeer');
      markeer.type = 'button'; markeer.tabIndex = -1; markeer.setAttribute('aria-hidden', 'true'); markeer.dataset.src = n.demo;
      markeer.style.left = n.plek[0] + '%'; markeer.style.top = n.plek[1] + '%'; markeer.style.width = (n.plek[2] || 12) + '%';
      beeld.appendChild(markeer);
      var st = el('div', 'sticker');
      st.style.left = (n.plek[0] - 1.6) + '%'; st.style.top = n.plek[1] + '%';
      st.style.setProperty('--draai', [-10, 7, -5, 9][i % 4] + 'deg');
      var knop = el('button', 'demo-knop');
      knop.type = 'button'; knop.dataset.titel = n.titel; knop.dataset.src = n.demo;
      knop.innerHTML = '<span class="sticker-tekst">' + T('muziek.demo') + '</span><svg viewBox="0 0 24 24" aria-hidden="true"><path class="i-speel" d="M7 4l13 8-13 8z"/><path class="i-pauze" d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';
      var balk = el('span', 'voortgang'); balk.appendChild(el('span', 'voortgang-vul'));
      st.appendChild(knop); st.appendChild(balk);
      knopStand(knop, actief === n.demo && !speler.paused);
      function speelAf() {
        if (actief === n.demo) { if (speler.paused) speler.play(); else speler.pause(); return; }
        actief = n.demo; speler.src = n.demo; speler.play();
      }
      knop.addEventListener('click', speelAf);
      markeer.addEventListener('click', speelAf);
      beeld.appendChild(st);
    });
  }
  function werkKnoppenBij() {
    document.querySelectorAll('#setlist-beeld .demo-knop').forEach(function (k) {
      var dit = k.dataset.src === actief;
      knopStand(k, dit && !speler.paused);
      var m = document.querySelector('#setlist-beeld .markeer[data-src="' + k.dataset.src + '"]');
      if (m) m.classList.toggle('speelt', dit && !speler.paused);
      var vul = k.parentNode.querySelector('.voortgang-vul');
      if (!dit) vul.style.width = '0%';
    });
  }
  ['play', 'pause', 'ended'].forEach(function (ev) { speler.addEventListener(ev, werkKnoppenBij); });
  speler.addEventListener('timeupdate', function () {
    var k = document.querySelector('#setlist-beeld .demo-knop[data-src="' + actief + '"]');
    if (k && speler.duration) k.parentNode.querySelector('.voortgang-vul').style.width = (speler.currentTime / speler.duration * 100) + '%';
  });
  speler.addEventListener('ended', function () { speler.currentTime = 0; });

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
          'address': { '@type': 'PostalAddress', 'streetAddress': g.adres || undefined, 'addressLocality': g.plaats || '', 'addressCountry': 'NL' }
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
    vasteTeksten(); contactPersoon(); knipKoppen(); band(); tour(); video(); fotos(); riders(); tekenTracks();
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

/* =========================================================
   PRETTY VACANT, GEGEVENS VAN DE SITE

   De site is tweetalig (NL en UK). Velden die eindigen op _en
   zijn de Engelse versie. Laat je er een weg, dan toont de
   Engelse site gewoon de Nederlandse tekst.
   Dit is het enige bestand dat je normaal hoeft aan te passen.

   Op GitHub: open dit bestand, klik op het potloodje,
   pas iets aan en klik op "Commit changes". Klaar.

   Let op de schrijfwijze: tekst tussen 'aanhalingstekens',
   en na elke regel of elk blokje { } een komma.
   ========================================================= */

const BAND = {
  email: 'info@prettyvacant.nl',
  instagram: 'https://www.instagram.com/prettyvacant_band/',
  instagramNaam: '@prettyvacant_band',
  // Plak hier het adres van jullie Facebookpagina:
  facebook: 'https://www.facebook.com/search/top?q=Pretty%20Vacant%20band',
};

/* ---------------------------------------------------------
   DE BAND
   foto (mag je weglaten): zet een portret in de map "fotos"
   en vul de bestandsnaam in, bijvoorbeeld foto: 'ronald.jpg'
   --------------------------------------------------------- */
const LEDEN = [
  { naam: 'Ronald', rol: 'Zang', rol_en: 'Vocals' },
  { naam: 'Ray', rol: 'Gitaar', rol_en: 'Guitar' },
  { naam: 'Jurrien', rol: 'Bas', rol_en: 'Bass' },
  { naam: 'Arthur', rol: 'Drums', rol_en: 'Drums' },
];

/* ---------------------------------------------------------
   TOURDATA
   Eén blokje per optreden. Datum altijd als 'JJJJ-MM-DD'.
   Optredens in het verleden verhuizen vanzelf naar "Eerder gespeeld".
   status (mag je weglaten): 'uitverkocht', 'gratis' of 'besloten'
   tickets (mag je weglaten): link naar de kaartverkoop
   De tourposter naast de lijst is img/tourposter.jpg. Nieuwe poster?
   Upload hem met precies die naam, dan vervangt hij de oude.
   --------------------------------------------------------- */
const TOUR = [
  { datum: '2026-10-24', zaal: 'De Stadsgraaf', plaats: 'Enschede' },
  { datum: '2026-11-27', zaal: 'Café De Flierefluiter', plaats: 'Apeldoorn' },
  { datum: '2027-01-22', zaal: 'Wielercafé', plaats: 'Doetinchem' },
  { datum: '2027-04-10', zaal: 'Leuvenheim Live', plaats: 'Leuvenheim' },
  // Nieuw optreden? Kopieer een regel hierboven en pas hem aan, bijvoorbeeld:
  // { datum: '2027-05-15', tijd: '21:30', zaal: 'Naam zaal', plaats: 'Stad', tickets: 'https://...' },
];

/* ---------------------------------------------------------
   VIDEO'S (YouTube)
   Neem het stukje na "v=" uit de YouTube-link.
   Voorbeeld: https://www.youtube.com/watch?v=abc123XYZ  ->  id: 'abc123XYZ'
   --------------------------------------------------------- */
const VIDEOS = [
  // { id: 'abc123XYZ', titel: 'Anarchy in the U.K., live in ...', titel_en: 'Anarchy in the U.K., live at ...' },
];

/* ---------------------------------------------------------
   FOTO'S
   Zet de foto's in de map "fotos" en noem ze hier.
   Liefst liggend en niet groter dan ca. 2000 pixels breed.
   --------------------------------------------------------- */
const FOTOS = [
  { bestand: 'union-jack-backdrop.jpg', onderschrift: 'Ons podiumdoek', onderschrift_en: 'Our stage backdrop' },
  // Bandfoto erbij? Zet hem in de map "fotos" en voeg een regel toe:
  // { bestand: 'live-enschede.jpg', onderschrift: 'Live in De Stadsgraaf, Enschede', onderschrift_en: 'Live at De Stadsgraaf, Enschede' },
];

/* ---------------------------------------------------------
   RIDERS
   Zet de PDF's in de map "riders" en vul de bestandsnaam in.
   Leeg laten ('') betekent: "op aanvraag".
   --------------------------------------------------------- */
const RIDERS = [
  { titel: 'Technische rider', titel_en: 'Technical rider',
    omschrijving: 'Backline, monitoring en kanalenlijst', omschrijving_en: 'Backline, monitoring and input list', bestand: '' },
  { titel: 'Stageplot', titel_en: 'Stage plot',
    omschrijving: 'Opstelling op het podium', omschrijving_en: 'Stage layout', bestand: '' },
  { titel: 'Hospitality rider', titel_en: 'Hospitality rider',
    omschrijving: 'Kleedkamer, catering en parkeren', omschrijving_en: 'Dressing room, catering and parking', bestand: '' },
];

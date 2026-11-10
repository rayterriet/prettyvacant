/* =========================================================
   PRETTY VACANT, GEGEVENS VAN DE SITE

   De site is drietalig (NL, UK en DE). Velden die eindigen op _en
   zijn de Engelse versie, velden op _de de Duitse. Laat je een
   Duits veld weg, dan toont de Duitse site de Engelse tekst.
   Laat je een Engels veld weg, dan wordt het de Nederlandse tekst.
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
  facebook: 'https://www.facebook.com/profile.php?id=61591733096831',
  youtube: 'https://www.youtube.com/@prettyvacantsexpistolstribute',
  youtubeNaam: '@prettyvacantsexpistolstribute',
  // Contactpersoon voor boekingen (telefoon met +31, zonder spaties):
  contactNaam: 'Jurrien Schadron',
  contactTel: '+31648600032',
  contactTelTekst: '06 48 60 00 32',
};

/* ---------------------------------------------------------
   DE BAND
   foto (mag je weglaten): zet een portret in de map "fotos"
   en vul de bestandsnaam in, bijvoorbeeld foto: 'ronald.jpg'
   --------------------------------------------------------- */
const LEDEN = [
  { naam: 'Ronald', rol: 'Zang', rol_en: 'Vocals', rol_de: 'Gesang' },
  { naam: 'Ray', rol: 'Gitaar', rol_en: 'Guitar', rol_de: 'Gitarre' },
  { naam: 'Jurrien', rol: 'Bas', rol_en: 'Bass', rol_de: 'Bass' },
  { naam: 'Arthur', rol: 'Drums', rol_en: 'Drums', rol_de: 'Schlagzeug' },
];

/* ---------------------------------------------------------
   TOURDATA
   Eén blokje per optreden. Datum altijd als 'JJJJ-MM-DD'.
   Optredens in het verleden verhuizen vanzelf naar "Eerder gespeeld".
   status (mag je weglaten): 'uitverkocht', 'gratis' of 'besloten'
   tickets (mag je weglaten): link naar de kaartverkoop
   voorprogramma en voorprogramma_tijd (mag je weglaten): naam en starttijd van de support-act
   prijs (mag je weglaten): toegangsprijs in euro's, bijvoorbeeld prijs: 10
   De tourposter naast de lijst is img/tourposter.jpg. Nieuwe poster?
   Upload hem met precies die naam, dan vervangt hij de oude.
   --------------------------------------------------------- */
const TOUR = [
  { datum: '2026-10-24', tijd: '22:30', zaal: 'De Stadsgraaf', plaats: 'Enschede', voorprogramma: 'RUK', voorprogramma_tijd: '21:00', status: 'gratis' },
  { datum: '2026-11-27', tijd: '21:00', zaal: 'Café De Flierefluiter', plaats: 'Apeldoorn', status: 'gratis' },
  { datum: '2027-01-22', zaal: 'Wielercafé', plaats: 'Doetinchem', status: 'gratis' },
  { datum: '2027-02-19', zaal: 'Jolly Jug', plaats: 'Enschede', status: 'gratis' },
  { datum: '2027-03-13', tijd: '21:00', zaal: 'Rebel Yell', plaats: 'Breda', status: 'gratis' },
  { datum: '2027-04-10', zaal: 'Leuvenheim Live', plaats: 'Leuvenheim', status: 'gratis' },
  { datum: '2027-07-03', tijd: '21:00', zaal: 'Stage Music Cafe', plaats: 'Eindhoven', status: 'gratis' },
  // Nieuw optreden? Kopieer een regel hierboven en pas hem aan, bijvoorbeeld:
  // { datum: '2027-05-15', tijd: '21:30', zaal: 'Naam zaal', plaats: 'Stad', tickets: 'https://...' },
];

/* ---------------------------------------------------------
   VIDEO'S
   YouTube: neem het stukje na "v=" uit de YouTube-link.
   Voorbeeld: https://www.youtube.com/watch?v=abc123XYZ  ->  id: 'abc123XYZ'
   Eigen videobestand: zet de .mp4 (liefst kleiner dan 50 MB) en een
   plaatje in de map "video" en vul bestand en poster in.
   --------------------------------------------------------- */
const VIDEOS = [
  {
    bestand: 'aftermovie-enschede-2026.mp4',
    poster: 'aftermovie-enschede-2026.jpg',
    titel: 'Aftermovie, onze allereerste try-out in De Stadsgraaf, Enschede (24-10-2026)',
    titel_en: 'Aftermovie, our very first try-out at De Stadsgraaf, Enschede (24-10-2026)',
    titel_de: 'Aftermovie, unser allererster Try-out im De Stadsgraaf, Enschede (24.10.2026)',
  },
  // { id: 'abc123XYZ', titel: 'Anarchy in the U.K., live in ...', titel_en: 'Anarchy in the U.K., live at ...' },
];

/* ---------------------------------------------------------
   FOTO'S
   Zet de foto's in de map "fotos" en noem ze hier.
   Liefst liggend en niet groter dan ca. 2000 pixels breed.
   --------------------------------------------------------- */
const FOTOS = [
  { bestand: 'union-jack-backdrop.jpg', onderschrift: 'Ons podiumdoek', onderschrift_en: 'Our stage backdrop', onderschrift_de: 'Unser Bühnenbanner' },
  // Bandfoto erbij? Zet hem in de map "fotos" en voeg een regel toe:
  // { bestand: 'live-enschede.jpg', onderschrift: 'Live in De Stadsgraaf, Enschede', onderschrift_en: 'Live at De Stadsgraaf, Enschede' },
];

/* ---------------------------------------------------------
   RIDERS
   Zet de PDF's in de map "riders" en vul de bestandsnaam in.
   Leeg laten ('') betekent: "op aanvraag".
   --------------------------------------------------------- */
const RIDERS = [
  { titel: 'Technische rider', titel_en: 'Technical rider', titel_de: 'Technischer Rider',
    omschrijving: 'Bezetting, inputlijst, monitors, backline en stroom', omschrijving_en: 'Line-up, input list, monitors, backline and power', omschrijving_de: 'Besetzung, Inputliste, Monitore, Backline und Strom', bestand: 'pretty-vacant-rider-2026.pdf' },
  { titel: 'Stageplot', titel_en: 'Stage plot', titel_de: 'Stageplot',
    omschrijving: 'Opstelling op het podium (pagina 3 van de rider)', omschrijving_en: 'Stage layout (page 3 of the rider)', omschrijving_de: 'Bühnenaufbau (Seite 3 des Riders)', bestand: 'pretty-vacant-rider-2026.pdf' },
  { titel: 'Hospitality rider', titel_en: 'Hospitality rider', titel_de: 'Hospitality Rider',
    omschrijving: 'Kleedkamer, catering en parkeren', omschrijving_en: 'Dressing room, catering and parking', omschrijving_de: 'Backstage, Catering und Parken', bestand: '' },
];

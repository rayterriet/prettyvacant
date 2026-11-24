#!/usr/bin/env python3
"""Haalt de laatste Sex Pistols-nieuwskoppen op via Google Nieuws (RSS)
en schrijft ze naar nieuws.json. Draait elke dag via GitHub Actions
(.github/workflows/nieuws.yml). De site toont alleen kop, bron en datum
en linkt door naar het oorspronkelijke artikel.

Zelf testen: python3 scripts/nieuws.py
"""
import email.utils
import json
import re
import sys
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path

ZOEK = '"Sex Pistols"'
FEEDS = {
    'nl': ('nl', 'NL', 'NL:nl'),
    'en': ('en-GB', 'GB', 'GB:en'),
    'de': ('de', 'DE', 'DE:de'),
}
MAX = 8          # aantal koppen per taal
MIN_EIGEN = 4    # minder dan dit in de eigen taal? Aanvullen met Engels
UIT = Path(__file__).resolve().parent.parent / 'nieuws.json'


def haal(hl, gl, ceid):
    url = 'https://news.google.com/rss/search?' + urllib.parse.urlencode(
        {'q': ZOEK, 'hl': hl, 'gl': gl, 'ceid': ceid})
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (prettyvacant.nl nieuws)'})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def lees(xml_bytes):
    items = []
    root = ET.fromstring(xml_bytes)
    for it in root.iter('item'):
        titel = (it.findtext('title') or '').strip()
        link = (it.findtext('link') or '').strip()
        bron = (it.findtext('source') or '').strip()
        datum = it.findtext('pubDate') or ''
        if not titel or not link.startswith('https://'):
            continue
        # Google zet " - Bron" achter de kop; die halen we eraf.
        if bron and titel.endswith(' - ' + bron):
            titel = titel[: -len(' - ' + bron)].strip()
        elif not bron and ' - ' in titel:
            titel, bron = titel.rsplit(' - ', 1)
        # Alleen berichten waar de Sex Pistols echt in de kop staan.
        if not re.search(r'pistols', titel, re.I):
            continue
        try:
            d = email.utils.parsedate_to_datetime(datum).astimezone(timezone.utc)
        except Exception:
            continue
        items.append({'titel': titel, 'bron': bron, 'link': link,
                      'datum': d.strftime('%Y-%m-%d')})
    items.sort(key=lambda x: x['datum'], reverse=True)
    uniek, gezien = [], set()
    for x in items:
        sleutel = re.sub(r'\W+', '', x['titel'].lower())[:60]
        if sleutel in gezien:
            continue
        gezien.add(sleutel)
        uniek.append(x)
    return uniek


def main():
    oud = {}
    if UIT.exists():
        try:
            oud = json.loads(UIT.read_text(encoding='utf-8'))
        except Exception:
            oud = {}
    per_taal = {}
    for taal, (hl, gl, ceid) in FEEDS.items():
        try:
            per_taal[taal] = lees(haal(hl, gl, ceid))
        except Exception as e:
            print(f'{taal}: ophalen mislukt ({e}), oude koppen blijven staan', file=sys.stderr)
            per_taal[taal] = None
    uit = {'bijgewerkt': oud.get('bijgewerkt')}
    veranderd = False
    for taal in FEEDS:
        lijst = per_taal[taal]
        if lijst is None:
            uit[taal] = oud.get(taal, [])
            continue
        if taal != 'en' and len(lijst) < MIN_EIGEN and per_taal.get('en'):
            links = {x['link'] for x in lijst}
            lijst = lijst + [x for x in per_taal['en'] if x['link'] not in links]
            lijst.sort(key=lambda x: x['datum'], reverse=True)
        uit[taal] = lijst[:MAX]
        if uit[taal] != oud.get(taal):
            veranderd = True
    if veranderd or not uit['bijgewerkt']:
        uit['bijgewerkt'] = datetime.now(timezone.utc).strftime('%Y-%m-%d')
    UIT.write_text(json.dumps(uit, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
    print(', '.join(f'{t}: {len(uit[t])}' for t in FEEDS))


if __name__ == '__main__':
    main()

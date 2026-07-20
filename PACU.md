# St. Francis PACU Dashboard

A wall-display dashboard for the PACU's 75" TVs, built on the same engine as
the ham dashboard (`hamdash.html`). Point the TV browser at:

```
pacudash.html
```

(Open it full screen — F11 in most browsers. No web server required; opening
the file directly works, same as hamdash.)

## What's on screen

**Top banner**
- Left: date + local Tulsa time in 24-hour (military) format
- Center: **St. Francis PACU**
- Right: live outside temperature + conditions (NWS Tulsa Intl, station `KTUL`,
  refreshes every 10 minutes, no API key needed)

**Staffing strip** (second banner row, on the main page and all location pages)
- CHARGE, TECHS (auto-counted), ANESTHESIA (auto-counted), CENSUS
- Click **✎ EDIT** to update names/extensions each shift. Entries are saved in
  that TV's browser (localStorage) — no files to edit, and each TV keeps its
  own board until it's changed again.

**Main grid (3×2 live cams)**
1. Sea otters — Monterey Bay Aquarium (right-click the tile to cycle through
   a second Monterey stream and two Vancouver Aquarium cams if one is down)
2. Brooks Falls brown bears, Katmai NP — salmon season (July–Sept)
3. Big Bear bald eagle nest (Jackie & Shadow)
4. Giant pandas — explore.org Wolong Grove (right-click for iPanda 24/7)
5. St. Augustine Alligator Farm ⇄ Shark Lagoon (rotates every 10 min)
6. Tulsa radar / KJRH local cams / GOES satellite (rotates every 15 s)

**Bottom ticker** — NWS active weather alerts for Oklahoma, fetched straight
from api.weather.gov. Shows "No active weather alerts" when quiet.

**Announcements ticker** — a red strip above the weather ticker that scrolls
unit alerts (e.g. "⚠ OUT OF FENTANYL") on every page. Add or clear messages
in the ✎ EDIT panel's Announcements field — separate multiple messages with
`;`, leave it blank to hide the strip. Like the staffing board, announcements
are per-TV (saved in that browser).

**Menu buttons** (slide out from the screen edges)
- Left: **MAUI**, **ESTES PARK**, **PENSACOLA**, **CLEARWATER OR**,
  **NAVARRE FL** — the getaway pages — plus a full-screen **JELLY CAM**
- Right: Tulsa radar, regional weather map, and the standard engine options
  (BACK, Refresh, Setup, Sources)

## Location pages

Each getaway page opens with a large tile showing that location's **local time
(24-hour) and NWS weather** (current conditions + 4-period forecast), plus its
webcams:

| Page | Config | Cams |
| --- | --- | --- |
| Maui | `pacu_maui.js` | Ka'anapali, Napili Bay, Wailea, Molokai radar, GOES-18 |
| Estes Park | `pacu_estes.js` | Longs Peak, Alpine Visitor Center, Beaver Meadows, Glacier Basin, Denver radar/GOES |
| Pensacola | `pacu_pcola.js` | 3 Pensacola Beach cams, Navarre Pier, Mobile radar/NHC outlook/GOES |
| Clearwater OR | `pacu_clearwater.js` | Clearwater Restaurant sea lion cam (Newport, OR), OSU Port Dock 1 cam, Pacific winds, Portland radar, GOES-18 |
| Navarre Beach | `pacu_navarre.js` | Navarre Pier (2 streams), Navarre Beach Life 4K, Pensacola Beach, Mobile radar/NHC, GOES-19 |

**BACK** (either edge) returns to the main PACU screen. Pages stay put until
someone navigates away (no auto-return).

The time/weather tile is `weather.html` and works for any place NWS covers:

```
weather.html?name=Somewhere&lat=36.15&lon=-95.99&tz=America/Chicago
```

## Fixing a dead cam tile

YouTube live streams get a new video ID whenever the stream restarts. If a
tile shows a dead player:

1. Open that cam's channel `/streams` page (links are in the comments at the
   top of `pacu.js`).
2. Copy the new video ID from the current live stream's URL.
3. Replace the old ID in the tile's embed URL in `pacu.js`
   (`https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1...`).

Tips: right-click a tile to flip to its alternate cam; double-click a tile to
unlock the player for interaction (double-click images to zoom instead).

## Engine notes

- `pacudash.html` is the hamdash engine with: 24-hour banner clock + date,
  NWS outside temp, the staffing strip/editor, direct NWS alert ticker
  (no third-party RSS proxy), and non-blocking font loading so a locked-down
  hospital network can't stall the page. Its settings live under separate
  localStorage keys (`pacudash_*`), so it never collides with the ham
  dashboard in the same browser.
- Config format is identical to hamdash (`aURL`, `aIMG`, `tileDelay`, `aRSS`);
  the root config is `pacu.js`. Two extra config vars: `showStaffBar` (enables
  the staffing strip) and `wxStation` (NWS station for the banner temp).

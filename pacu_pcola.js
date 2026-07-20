// CUT START
// St. Francis PACU - Pensacola FL page (loaded by pacudash.html)
const disableSetup = false;
const disableLdCfg = true;
var topBarCenterText = "St. Francis PACU - Pensacola FL";

// Grid layout desired
var layout_cols = 3;
var layout_rows = 2;

// Menu items
// Structure is [HTML color code, menu text, target URL, scale, side ("R" = right)]
var aURL = [
  [
    "2196F3",
    "HURRICANES",
    "https://www.nhc.noaa.gov/",
    "1",
    "R",
  ],
  [
    "2196F3",
    "PCOLA WX MAP",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=30.4213&lon=-87.2169&zoom=9",
    "1",
    "R",
  ],
  [
    "2196F3",
    "PCOLA WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-87.22,30.42,3000",
    "1",
    "R",
  ],
];

// Dashboard tiles (3 cols x 2 rows = 6 tiles)
var aIMG = [
  // 1 - Local time (24-hr) + NWS weather for Pensacola Beach
  [
    "",
    "iframe|weather.html?name=Pensacola,%20FL&lat=30.4213&lon=-87.2169&tz=America/Chicago",
  ],
  // 2 - Pensacola Beach official cams (Santa Rosa Island Authority)
  [
    "PENSACOLA BEACH - SOUTH",
    "iframe|https://www.youtube.com/embed/2X0GdFzfv3A?autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 3
  [
    "PENSACOLA BEACH - EAST",
    "iframe|https://www.youtube.com/embed/890WmHX7h6U?autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 4
  [
    "PENSACOLA BEACH - WEST",
    "iframe|https://www.youtube.com/embed/HKIc6CYlMzI?autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 5 - Navarre Beach Pier (just down the island)
  [
    "NAVARRE BEACH PIER",
    "iframe|https://www.youtube.com/embed/7WzKQETomHU?autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 6 - Mobile radar + NHC tropical outlook + GOES-19 Gulf view
  [
    ["MOBILE RADAR (KMOB)", "NHC 7-DAY TROPICAL OUTLOOK", "GOES-19 GULF/SE"],
    "https://radar.weather.gov/ridge/standard/KMOB_loop.gif",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/se/GEOCOLOR/GOES19-SE-GEOCOLOR-600x600.gif",
  ],
];

// Image rotation intervals in milliseconds per tile
var tileDelay = [
  86400000, 86400000, 86400000, 86400000, 86400000, 60600,
];

var aRSS = [
  ["https://api.weather.gov/alerts/active.atom?area=FL", 30],
];

// CUT END

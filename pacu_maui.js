// CUT START
// St. Francis PACU - Maui page (loaded by pacudash.html)
const disableSetup = false;
const disableLdCfg = true;
var topBarCenterText = "St. Francis PACU - Maui No Ka Oi";

// Show the PACU staffing strip here too (same board as the main page;
// entries are shared browser-wide and editable from any page)
var showStaffBar = true;

// Grid layout desired
var layout_cols = 3;
var layout_rows = 2;

// Menu items
// Structure is [HTML color code, menu text, target URL, scale, side ("R" = right)]
var aURL = [
  [
    "2196F3",
    "MAUI WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-156.5,20.8,3000",
    "1",
    "R",
  ],
  [
    "2196F3",
    "MAUI WX MAP",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=20.7984&lon=-156.3319&zoom=9",
    "1",
    "R",
  ],
];

// Dashboard tiles (3 cols x 2 rows = 6 tiles)
var aIMG = [
  // 1 - Local time (24-hr) + NWS weather for Maui
  [
    "",
    "iframe|weather.html?name=Maui,%20HI&lat=20.7984&lon=-156.3319&tz=Pacific/Honolulu",
  ],
  // 2 - Ka'anapali Beach, Sheraton Maui
  [
    "KA'ANAPALI - SHERATON MAUI",
    "iframe|https://www.youtube.com/embed/HuYWHvFWais?autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 3 - Napili Bay
  [
    "NAPILI BAY",
    "iframe|https://www.youtube.com/embed/GL_2CrLwSDA?autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 4 - Wailea, Fairmont Kea Lani
  [
    "WAILEA - FAIRMONT KEA LANI",
    "iframe|https://www.youtube.com/embed/G1zgkkguCyc?autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 5 - Molokai radar
  ["MOLOKAI RADAR (PHMO)", "https://radar.weather.gov/ridge/standard/PHMO_loop.gif"],
  // 6 - GOES-18 Hawaii satellite
  [
    "GOES-18 HAWAII",
    "https://cdn.star.nesdis.noaa.gov/GOES18/ABI/SECTOR/hi/GEOCOLOR/GOES18-HI-GEOCOLOR-600x600.gif",
  ],
];

// Image rotation intervals in milliseconds per tile
var tileDelay = [
  86400000, 86400000, 86400000, 86400000, 60100, 60200,
];

var aRSS = [
  ["https://api.weather.gov/alerts/active.atom?area=HI", 30],
];

// CUT END

// CUT START
// St. Francis PACU - Clearwater Restaurant / Newport, Oregon page
// (loaded by pacudash.html)
//
// The Clearwater Restaurant sea lion cam overlooks Port Dock 1 on Yaquina
// Bay in Newport, OR. Their cam lives on their website; if a website tile
// shows blank (some sites refuse to be embedded), right-click the tile to
// flip to the next source, or use the CLEARWATER SITE menu button to open
// their page in a new tab.
const disableSetup = false;
const disableLdCfg = true;
var topBarCenterText = "St. Francis PACU - Clearwater / Newport OR";

// Show the PACU staffing strip here too (same board as the main page;
// entries are shared browser-wide and editable from any page)
var showStaffBar = true;

// Grid layout desired
var layout_cols = 3;
var layout_rows = 2;

// Menu items
// Structure is [HTML color code, menu text, target URL, scale, side ("R" = right)]
var aURL = [
  ["4CAF50", "CLEARWATER SITE", "newtab|https://clearwaterrestaurant.com/live-cam", "1"],
  [
    "2196F3",
    "NEWPORT WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-124.05,44.64,3000",
    "1",
    "R",
  ],
  [
    "2196F3",
    "NEWPORT WX MAP",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.6368&lon=-124.0535&zoom=9",
    "1",
    "R",
  ],
];

// Dashboard tiles (3 cols x 2 rows = 6 tiles)
var aIMG = [
  // 1 - Local time (24-hr) + NWS weather for Newport, OR
  [
    "",
    "iframe|weather.html?name=Newport,%20OR&lat=44.6368&lon=-124.0535&tz=America/Los_Angeles",
  ],
  // 2 - Clearwater Restaurant sea lion cam (right-click for the
  //     newportsealions.com dock cam if the site blocks embedding)
  [
    ["SEA LIONS - CLEARWATER RESTAURANT", "SEA LIONS - NEWPORTSEALIONS.COM"],
    "iframe|https://clearwaterrestaurant.com/live-cam",
    "iframe|https://newportsealions.com/",
  ],
  // 3 - OSU Marine Mammal Institute cam on the same Port Dock 1 haul-out
  [
    "SEA LIONS - PORT DOCK 1 (OSU CAM)",
    "iframe|https://webcam.oregonstate.edu/sealion",
  ],
  // 4 - Pacific surface winds around Yaquina Bay
  [
    "PACIFIC WINDS - YAQUINA BAY",
    "iframe|https://earth.nullschool.net/#current/wind/surface/level/orthographic=-124.05,44.64,1500",
  ],
  // 5 - Portland radar (closest WSR-88D with coastal coverage)
  ["PORTLAND RADAR (KRTX)", "https://radar.weather.gov/ridge/standard/KRTX_loop.gif"],
  // 6 - GOES-18 Pacific Northwest satellite
  [
    "GOES-18 PACIFIC NORTHWEST",
    "https://cdn.star.nesdis.noaa.gov/GOES18/ABI/SECTOR/pnw/GEOCOLOR/GOES18-PNW-GEOCOLOR-600x600.gif",
  ],
];

// Image rotation intervals in milliseconds per tile
var tileDelay = [
  86400000, 86400000, 86400000, 86400000, 60100, 60200,
];

var aRSS = [
  ["https://api.weather.gov/alerts/active.atom?area=OR", 30],
];

// CUT END

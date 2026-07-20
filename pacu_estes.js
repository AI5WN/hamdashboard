// CUT START
// St. Francis PACU - Estes Park / Rocky Mountain NP page (loaded by pacudash.html)
const disableSetup = false;
const disableLdCfg = true;
var topBarCenterText = "St. Francis PACU - Estes Park / RMNP";

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
    "ESTES WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-105.52,40.38,3000",
    "1",
    "R",
  ],
  [
    "2196F3",
    "ESTES WX MAP",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=40.3772&lon=-105.5217&zoom=9",
    "1",
    "R",
  ],
];

// Dashboard tiles (3 cols x 2 rows = 6 tiles)
var aIMG = [
  // 1 - Local time (24-hr) + NWS weather for Estes Park
  [
    "",
    "iframe|weather.html?name=Estes%20Park,%20CO&lat=40.3772&lon=-105.5217&tz=America/Denver",
  ],
  // 2 - Longs Peak (14,259 ft)
  ["LONGS PEAK", "https://www.nps.gov/webcams-romo/longs_peak.jpg"],
  // 3 - Alpine Visitor Center (11,796 ft on Trail Ridge Road)
  [
    "ALPINE VISITOR CENTER",
    "https://www.nps.gov/webcams-romo/alpine_visitor_center.jpg",
  ],
  // 4 - Beaver Meadows Entrance (just west of Estes Park)
  ["BEAVER MEADOWS ENTRANCE", "https://www.nps.gov/webcams-romo/bme.jpeg"],
  // 5 - Glacier Basin
  ["GLACIER BASIN", "https://www.nps.gov/webcams-romo/glacier_basin.jpeg"],
  // 6 - Colorado weather: Denver radar + GOES-19 Northern Rockies
  [
    ["DENVER RADAR (KFTG)", "GOES-19 ROCKIES"],
    "https://radar.weather.gov/ridge/standard/KFTG_loop.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/nr/GEOCOLOR/GOES19-NR-GEOCOLOR-600x600.gif",
  ],
];

// Image rotation intervals in milliseconds per tile
var tileDelay = [
  86400000, 60100, 60200, 60300, 60400, 90600,
];

var aRSS = [
  ["https://api.weather.gov/alerts/active.atom?area=CO", 30],
];

// CUT END

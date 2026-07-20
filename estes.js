// CUT START
// const disableSetup = true;
var topBarCenterText = "AI5WN - Estes Park / RMNP";

// Grid layout desired
var layout_cols = 3;
var layout_rows = 2;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
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
    "ESTES WX",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=40.3772&lon=-105.5217&zoom=9",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
var currentDate = new Date();
var aIMG = [
  // 1 - Longs Peak (14,259 ft)
  ["LONGS PEAK", "https://www.nps.gov/webcams-romo/longs_peak.jpg"],
  // 2 - Alpine Visitor Center (11,796 ft on Trail Ridge Road)
  [
    "ALPINE VISITOR CENTER",
    "https://www.nps.gov/webcams-romo/alpine_visitor_center.jpg",
  ],
  // 3 - Beaver Meadows Entrance (just west of Estes Park)
  ["BEAVER MEADOWS ENTRANCE", "https://www.nps.gov/webcams-romo/bme.jpeg"],
  // 4 - Fall River Entrance (US 34 out of Estes)
  ["FALL RIVER ENTRANCE", "https://www.nps.gov/webcams-romo/fre.jpg"],
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
  60100, 60200, 60300, 60400, 60500, 90600,
];

var aRSS = [
  ["https://www.amsat.org/feed/", 60],
];

// CUT END

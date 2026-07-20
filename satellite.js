// CUT START
// const disableSetup = true;
var topBarCenterText = "AI5WN - Oklahoma Weather";

// Grid layout desired
var layout_cols = 2;
var layout_rows = 2;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#7/36.31/-95.62",
    "1",
    "R",
  ],
  [
    "2196F3",
    "RADAR",
    "https://radar.weather.gov/station/KINX/standard",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=36.3126&lon=-95.6161&zoom=6",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-95.62,36.31,3000",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDY",
    "https://embed.windy.com/embed2.html?lat=36.29&lon=-95.62&width=900&detailLat=36.29&detailLon=-95.62&height=600&zoom=8&level=surface&overlay=clouds&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1",
    "1",
    "R"
  ]
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
var currentDate = new Date();
var aIMG = [
  // 1
  ["TULSA RADAR (KINX)", "https://radar.weather.gov/ridge/standard/KINX_loop.gif"],
  // 2
  [
    "GOES-19 SOUTHERN PLAINS",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/sp/GEOCOLOR/GOES19-SP-GEOCOLOR-600x600.gif",
  ],
  // 3
  [
    "GOES-19 LIGHTNING (S. PLAINS)",
    "https://cdn.star.nesdis.noaa.gov/GOES19/GLM/SECTOR/sp/EXTENT3/GOES19-SP-EXTENT3-600x600.gif",
  ],
  // 4
  [
    "SPC DAY 1 SEVERE OUTLOOK",
    "https://www.spc.noaa.gov/partners/outlooks/national/swody1.png",
  ],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  60100, 60200, 300300, 60400,
];

var aRSS = [
  ["https://api.weather.gov/alerts/active.atom?area=OK", 30],
];

// CUT END

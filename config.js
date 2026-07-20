const disableSetup = false;
const disableLdCfg = false;
var topBarCenterText = `AI5WN - EM26eg`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  ["f3de21", "OK WX", "satellite.js"],
  ["f3de21", "MAUI", "maui.js"],
  ["f3de21", "ESTES", "estes.js"],
  ["f3de21", "HAMCLOCK", "newtab|https://openhamclock.com/", "1"],

  ["4CAF50", "APRS", "https://aprs.fi/#!mt=roadmap&z=11&lat=36.2893&lng=-95.6234", "1"],
  ["4CAF50", "POTA", "newtab|https://pota.app/#/map", "1"],
  ["4CAF50", "ISS TRACK", "https://iss.astroviewer.net/", "1"],
  ["9C27B0", "RCWA", "https://www.rcwa.org/", "1", "R"],
  ["9C27B0", "LICW", "https://longislandcwclub.org/", "1", "R"],

  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/AI5WN", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1",
  ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#7/36.31/-95.62",
    "1",
    "R",
  ],
  ["2196F3", "PSKREP", "https://pskreporter.info/pskmap.html", "1"],
  ["2196F3", "RBN", "https://www.reversebeacon.net/main.php", "1"],
  [
    "2196F3",
    "RADAR",
    "https://radar.weather.gov/station/KINX/standard",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
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
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
var aIMG = [
  [["Radar CONUS", "Radar Small"], "https://radar.weather.gov/ridge/standard/CONUS-LARGE_loop.gif", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "TULSA RADAR (inverted)",
    "invert|https://radar.weather.gov/ridge/standard/KINX_loop.gif",
  ],
  [
    "MUF MAP (KC2G)",
    "https://prop.kc2g.com/renders/current/mufd-normal-now.svg",
  ],
  [
    "ISS LIVE CAM",
    "iframe|https://www.youtube.com/embed/OKQEMp2555A?autoplay=1&mute=1",
  ],
  [
    "GOES S. PLAINS",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/sp/GEOCOLOR/GOES19-SP-GEOCOLOR-600x600.gif",
  ],
  [
    "GOES CONUS",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/CONUS/GEOCOLOR/1250x750.jpg",
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
    "LIGHTNING OK",
    "iframe|https://map.blitzortung.org/#7/36.31/-95.62",
  ],
  [
    ["OWASSO CAM (KJRH)", "DOWNTOWN TULSA CAM", "TULSA AIRPORT CAM", "GRAND LAKE DAM CAM"],
    "https://mediaassets.kjrh.com/weatherimages/OWASSO_CAM.jpg",
    "https://mediaassets.kjrh.com/weatherimages/DOWNTOWN_CAM.jpg",
    "https://mediaassets.kjrh.com/weatherimages/AIRPORT_CAM.jpg",
    "https://mediaassets.kjrh.com/weatherimages/PENSACOLA_DAM%20CAM.jpg",
  ],
  [
    "PLANES OVER TULSA",
    "iframe|https://globe.adsbexchange.com/?airport=TUL",
  ],
  [
    ["SPACE WEATHER 3-DAY", "AURORA FORECAST"],
    "https://services.swpc.noaa.gov/images/swx-overview-large.gif",
    "https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg",
  ],
  ["HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
var tileDelay = [
  11200,10000,11000,86400000,
  10200,10500,10300,10600,
  30400,86400000,60900,10800
];

// RSS feed items
// Structure is [feed URL, refresh interval in minutes]
var aRSS = [
  ["https://www.amsat.org/feed/", 60],           // Example RSS feed, refresh every 60 minutes
  ["https://daily.hamweekly.com/atom.xml", 120], // Example Atom feed, refresh every 120 minutes
  ];

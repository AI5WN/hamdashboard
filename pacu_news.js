// CUT START
// St. Francis PACU - Tulsa local news / weather / traffic page
// (loaded by pacudash.html)
//
// KJRH's YouTube live stream ID may rotate when the station restarts it -
// if that tile dies, grab the current stream from
// https://www.youtube.com/@2NewsOklahoma/streams and swap the ID below.
// They also run a "2 News Weather 24/7" stream on the same channel that is
// worth pinning here whenever a stable ID is known.
const disableSetup = false;
const disableLdCfg = true;
var topBarCenterText = "St. Francis PACU - Tulsa News & Weather";

// Show the PACU staffing strip here too (same board as the main page;
// entries are shared browser-wide and editable from any page)
var showStaffBar = true;

// Grid layout desired
var layout_cols = 3;
var layout_rows = 2;

// Menu items
// Structure is [HTML color code, menu text, target URL, scale, side ("R" = right)]
var aURL = [
  ["4CAF50", "KJRH SITE", "newtab|https://www.kjrh.com/video/live-stream", "1"],
  ["4CAF50", "OK TRAFFIC", "newtab|https://oktraffic.org/", "1"],
  [
    "2196F3",
    "NWS TULSA",
    "https://www.weather.gov/tsa/",
    "1",
    "R",
  ],
  [
    "2196F3",
    "RADAR PAGE",
    "https://radar.weather.gov/station/KINX/standard",
    "1",
    "R",
  ],
];

// Dashboard tiles (3 cols x 2 rows = 6 tiles)
var aIMG = [
  // 1 - Local time (24-hr) + NWS weather for Tulsa
  [
    "",
    "iframe|weather.html?name=Tulsa,%20OK&lat=36.1540&lon=-95.9928&tz=America/Chicago",
  ],
  // 2 - KJRH 2 News Oklahoma live stream (right-click for the station's
  //     website player if the YouTube stream is down)
  [
    ["KJRH 2 NEWS - LIVE", "KJRH WEBSITE PLAYER"],
    "iframe|https://www.youtube.com/embed/IfUlBZBo_b4?autoplay=1&mute=1&playsinline=1&rel=0",
    "iframe|https://www.kjrh.com/video/live-stream",
  ],
  // 3 - Interactive radar (Windy embed, built for embedding) with the
  //     NWS KINX loop as a right-click alternate
  [
    ["TULSA RADAR - LIVE (WINDY)", "TULSA RADAR (KINX LOOP)"],
    "iframe|https://embed.windy.com/embed2.html?lat=36.154&lon=-95.993&detailLat=36.154&detailLon=-95.993&zoom=8&overlay=radar&level=surface&calendar=now&type=map&metricWind=mph&metricTemp=%C2%B0F",
    "https://radar.weather.gov/ridge/standard/KINX_loop.gif",
  ],
  // 4 - Oklahoma watches/warnings map + SPC severe outlook, rotating
  [
    ["OK WATCHES & WARNINGS (NWS)", "SPC DAY 1 SEVERE OUTLOOK"],
    "https://forecast.weather.gov/wwamap/png/ok.png",
    "https://www.spc.noaa.gov/products/outlook/day1otlk.gif",
  ],
  // 5 - ODOT statewide traffic map (right-click for KJRH street-level cams
  //     if the site blocks embedding)
  [
    ["OK TRAFFIC MAP (ODOT)", "TULSA AIRPORT CAM", "DOWNTOWN TULSA CAM"],
    "iframe|https://oktraffic.org/",
    "https://mediaassets.kjrh.com/weatherimages/AIRPORT_CAM.jpg",
    "https://mediaassets.kjrh.com/weatherimages/DOWNTOWN_CAM.jpg",
  ],
  // 6 - KJRH tower cams around the metro, rotating
  [
    ["OWASSO CAM (KJRH)", "DOWNTOWN TULSA CAM", "TULSA AIRPORT CAM", "GRAND LAKE DAM CAM"],
    "https://mediaassets.kjrh.com/weatherimages/OWASSO_CAM.jpg",
    "https://mediaassets.kjrh.com/weatherimages/DOWNTOWN_CAM.jpg",
    "https://mediaassets.kjrh.com/weatherimages/AIRPORT_CAM.jpg",
    "https://mediaassets.kjrh.com/weatherimages/PENSACOLA_DAM%20CAM.jpg",
  ],
];

// Image rotation intervals in milliseconds per tile
var tileDelay = [
  86400000, 86400000, 86400000, 60300, 86400000, 15000,
];

// Oklahoma weather alerts, refreshed more aggressively on this page
var aRSS = [
  ["https://api.weather.gov/alerts/active.atom?area=OK", 10],
];

// CUT END

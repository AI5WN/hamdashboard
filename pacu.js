// CUT START
// St. Francis PACU - main dashboard config (loaded by pacudash.html)
//
// Live cam notes (YouTube live stream IDs rotate when a stream restarts):
//   - If a cam tile shows a dead player, find the current stream on the
//     channel's /streams page and swap the video ID in the embed URL below.
//   - Vancouver otter cam IDs churn often; Monterey Bay is the stable primary.
//     Vancouver channel: https://www.youtube.com/@VancouverAquarium/streams
//   - Brooks Falls (bears) is seasonal - most active July-Sept.
//     Current streams: https://explore.org/livecams/brown-bears/brown-bear-salmon-cam-brooks-falls
//   - Right-click any tile to flip to its alternate cam.
const disableSetup = false;
const disableLdCfg = true;
var topBarCenterText = `St. Francis PACU`;

// Show the PACU staffing strip (charge / techs / anesthesia / census) with
// the on-screen EDIT button. Staffing is saved in this browser (localStorage).
var showStaffBar = true;

// NWS observation station for the banner outside temperature (Tulsa Intl)
var wxStation = "KTUL";

// Grid layout
var layout_cols = 3;
var layout_rows = 2;

// Menu items
// Structure is [HTML color code, menu text, target URL, scale, side ("R" = right)]
var aURL = [
  ["00a5ad", "MAUI", "pacu_maui.js"],
  ["00a5ad", "ESTES PARK", "pacu_estes.js"],
  ["00a5ad", "PENSACOLA", "pacu_pcola.js"],

  ["9C27B0", "JELLY CAM", "https://www.youtube.com/embed/NUnJc82ptd4?autoplay=1&mute=1&playsinline=1&rel=0", "1"],

  [
    "2196F3",
    "TULSA RADAR",
    "https://radar.weather.gov/station/KINX/standard",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WEATHER MAP",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=36.1540&lon=-95.9928&zoom=8",
    "1",
    "R",
  ],
];

// Dashboard tiles (3 cols x 2 rows = 6 tiles)
// [Title or [rotating titles], URL1, URL2, ...] - "iframe|" embeds a website
var aIMG = [
  // 1 - Sea otters (Monterey primary; Vancouver alternate - right-click to flip)
  [
    ["SEA OTTERS - MONTEREY BAY", "SEA OTTERS - VANCOUVER AQUARIUM"],
    "iframe|https://www.youtube.com/embed/WrKZzs-CB_8?autoplay=1&mute=1&playsinline=1&rel=0",
    "iframe|https://www.youtube.com/embed/2R034rQ9gtQ?autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 2 - Brooks Falls brown bears, Katmai NP (salmon season Jul-Sep)
  [
    ["BROOKS FALLS BEARS - KATMAI, AK", "BROOKS FALLS - LOW CAM"],
    "iframe|https://www.youtube.com/embed/J7ZrIDvqlic?autoplay=1&mute=1&playsinline=1&rel=0",
    "iframe|https://www.youtube.com/embed/EwTH5yY7Mks?autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 3 - Big Bear bald eagle nest (Jackie & Shadow, Friends of Big Bear Valley)
  [
    ["BIG BEAR EAGLE NEST - JACKIE & SHADOW", "BIG BEAR EAGLES - WIDE VIEW"],
    "iframe|https://www.youtube.com/embed/B4-L2nfGcuE?autoplay=1&mute=1&playsinline=1&rel=0",
    "iframe|https://www.youtube.com/embed/41eq4VzCYc4?autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 4 - Giant pandas (explore.org Wolong Grove primary; iPanda 24/7 alternate)
  [
    ["PANDA CAM - WOLONG GROVE, CHINA", "PANDA CAM - IPANDA 24/7"],
    "iframe|https://www.youtube.com/embed/UKkc40WQm0c?autoplay=1&mute=1&playsinline=1&rel=0",
    "iframe|https://www.youtube.com/embed/YHsUGV70rOY?autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 5 - Alligators / sharks, rotating every 10 minutes (shark week ready)
  [
    ["ST. AUGUSTINE ALLIGATOR FARM", "SHARK LAGOON - AQUARIUM OF THE PACIFIC"],
    "iframe|https://www.youtube.com/embed/LHtzZf4T7xw?autoplay=1&mute=1&playsinline=1&rel=0",
    "iframe|https://www.youtube.com/embed/BLvr4K2eiRE?autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 6 - Local: Tulsa radar + KJRH skyline cams + GOES satellite, rotating
  [
    ["TULSA RADAR (KINX)", "OWASSO CAM (KJRH)", "DOWNTOWN TULSA CAM", "GOES S. PLAINS"],
    "https://radar.weather.gov/ridge/standard/KINX_loop.gif",
    "https://mediaassets.kjrh.com/weatherimages/OWASSO_CAM.jpg",
    "https://mediaassets.kjrh.com/weatherimages/DOWNTOWN_CAM.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/sp/GEOCOLOR/GOES19-SP-GEOCOLOR-600x600.gif",
  ],
];

// Per-tile rotation interval (ms). 86400000 = daily (effectively static;
// right-click a tile to flip to its alternate cam manually).
var tileDelay = [
  86400000, 86400000, 86400000,
  86400000, 600000, 15000,
];

// Bottom ticker: NWS active weather alerts for Oklahoma (fetched directly
// from api.weather.gov; shows "No active weather alerts" when quiet)
var aRSS = [
  ["https://api.weather.gov/alerts/active.atom?area=OK", 15],
];

// CUT END

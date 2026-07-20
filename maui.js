// CUT START
// const disableSetup = true;
var topBarCenterText = "AI5WN - Maui No Ka Oi";

// Grid layout desired
var layout_cols = 2;
var layout_rows = 2;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
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
    "MAUI WX",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=20.7984&lon=-156.3319&zoom=9",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
var currentDate = new Date();
var aIMG = [
  // 1 - Ka'anapali Beach, Sheraton Maui
  [
    "KA'ANAPALI - SHERATON MAUI",
    "iframe|https://www.youtube.com/embed/HuYWHvFWais?autoplay=1&mute=1",
  ],
  // 2 - Napili Bay
  [
    "NAPILI BAY",
    "iframe|https://www.youtube.com/embed/GL_2CrLwSDA?autoplay=1&mute=1",
  ],
  // 3 - Wailea, Fairmont Kea Lani
  [
    "WAILEA - FAIRMONT KEA LANI",
    "iframe|https://www.youtube.com/embed/G1zgkkguCyc?autoplay=1&mute=1",
  ],
  // 4 - Hawaii weather: Molokai radar + GOES-18 satellite
  [
    ["MOLOKAI RADAR (PHMO)", "GOES-18 HAWAII"],
    "https://radar.weather.gov/ridge/standard/PHMO_loop.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES18/ABI/SECTOR/hi/GEOCOLOR/GOES18-HI-GEOCOLOR-600x600.gif",
  ],
];

// Image rotation intervals in milliseconds per tile
var tileDelay = [
  86400000, 86400000, 86400000, 60000,
];

var aRSS = [
  ["https://api.weather.gov/alerts/active.atom?area=HI", 60],
];

// CUT END

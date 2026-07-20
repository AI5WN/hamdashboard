// CUT START
// const disableSetup = true;
var topBarCenterText = "AI5WN - Pensacola FL";

// Grid layout desired
var layout_cols = 3;
var layout_rows = 2;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
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
    "PCOLA WX",
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

// Dashboard items
// Structure is Title, Image Source URL
var currentDate = new Date();
var aIMG = [
  // 1 - Pensacola Beach official cams (Santa Rosa Island Authority)
  [
    "PENSACOLA BEACH - SOUTH",
    "iframe|https://www.youtube.com/embed/2X0GdFzfv3A?autoplay=1&mute=1",
  ],
  // 2
  [
    "PENSACOLA BEACH - EAST",
    "iframe|https://www.youtube.com/embed/890WmHX7h6U?autoplay=1&mute=1",
  ],
  // 3
  [
    "PENSACOLA BEACH - WEST",
    "iframe|https://www.youtube.com/embed/HKIc6CYlMzI?autoplay=1&mute=1",
  ],
  // 4 - Navarre Beach Pier (just down the island)
  [
    "NAVARRE BEACH PIER",
    "iframe|https://www.youtube.com/embed/7WzKQETomHU?autoplay=1&mute=1",
  ],
  // 5 - NHC 7-day Atlantic tropical outlook (hurricane season watch)
  [
    "NHC 7-DAY TROPICAL OUTLOOK",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png",
  ],
  // 6 - Mobile radar (covers Pensacola) + GOES-19 Southeast/Gulf view
  [
    ["MOBILE RADAR (KMOB)", "GOES-19 GULF/SE"],
    "https://radar.weather.gov/ridge/standard/KMOB_loop.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/se/GEOCOLOR/GOES19-SE-GEOCOLOR-600x600.gif",
  ],
];

// Image rotation intervals in milliseconds per tile
var tileDelay = [
  86400000, 86400000, 86400000, 86400000, 300500, 90600,
];

var aRSS = [
  ["https://api.weather.gov/alerts/active.atom?area=FL", 30],
  ["https://www.amsat.org/feed/", 120],
];

// CUT END

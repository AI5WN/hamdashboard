// CUT START
// St. Francis PACU - Jelly Cam page (loaded by pacudash.html)
//
// One giant jelly tile that keeps the top banner, staffing strip, and
// tickers on screen (unlike a raw full-screen embed, which covers them).
// Right-click the tile to flip between jelly cams; BACK returns to the
// main dashboard.
const disableSetup = false;
const disableLdCfg = true;
var topBarCenterText = "St. Francis PACU - Jelly Cam";

// Show the PACU staffing strip here too (same board as the main page;
// entries are shared browser-wide and editable from any page)
var showStaffBar = true;

// Grid layout desired (single full-width tile)
var layout_cols = 1;
var layout_rows = 1;

// Menu items
// Structure is [HTML color code, menu text, target URL, scale, side ("R" = right)]
var aURL = [];

// Dashboard tiles (1 tile)
var aIMG = [
  [
    [
      "JELLYFISH - AQUARIUM OF THE PACIFIC",
      "MONTEREY BAY JELLY CAM",
      "MONTEREY BAY MOON JELLIES",
    ],
    "iframe|https://www.youtube.com/embed/IYG9fnz40-E?autoplay=1&mute=1&playsinline=1&rel=0",
    "iframe|https://www.youtube.com/embed/m1XcdxjVGos?autoplay=1&mute=1&playsinline=1&rel=0",
    "iframe|https://www.youtube.com/embed/7N9-FODmuBA?autoplay=1&mute=1&playsinline=1&rel=0",
  ],
];

// Image rotation intervals in milliseconds per tile (static; right-click to flip)
var tileDelay = [
  86400000,
];

var aRSS = [
  ["https://api.weather.gov/alerts/active.atom?area=OK", 30],
];

// CUT END

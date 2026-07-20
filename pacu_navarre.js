// CUT START
// St. Francis PACU - Navarre Beach, FL page (loaded by pacudash.html)
const disableSetup = false;
const disableLdCfg = true;
var topBarCenterText = "St. Francis PACU - Navarre Beach FL";

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
    "HURRICANES",
    "https://www.nhc.noaa.gov/",
    "1",
    "R",
  ],
  [
    "2196F3",
    "NAVARRE WX MAP",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=30.3960&lon=-86.8636&zoom=9",
    "1",
    "R",
  ],
  [
    "2196F3",
    "GULF WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-86.86,30.40,3000",
    "1",
    "R",
  ],
];

// Dashboard tiles (3 cols x 2 rows = 6 tiles)
var aIMG = [
  // 1 - Local time (24-hr) + NWS weather for Navarre Beach
  [
    "",
    "iframe|weather.html?name=Navarre%20Beach,%20FL&lat=30.3960&lon=-86.8636&tz=America/Chicago",
  ],
  // 2 - Navarre Beach Fishing Pier (longest pier on the Gulf; right-click
  //     for the alternate pier stream)
  [
    ["NAVARRE PIER CAM", "NAVARRE PIER - ALT STREAM"],
    "iframe|https://www.youtube.com/embed/7WzKQETomHU?autoplay=1&mute=1&playsinline=1&rel=0",
    "iframe|https://www.youtube.com/embed/q8tgxTT7taU?autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 3 - Navarre Beach Life 4K cam (website embed; right-click for the
  //     neighboring SRIA Pensacola Beach East cam if the site blocks framing)
  [
    ["NAVARRE BEACH LIFE 4K", "PENSACOLA BEACH - EAST (SRIA)"],
    "iframe|https://navarrebeachlife.com/",
    "iframe|https://www.youtube.com/embed/890WmHX7h6U?autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 4 - Pensacola Beach South (SRIA), just down the island
  [
    "PENSACOLA BEACH - SOUTH (SRIA)",
    "iframe|https://www.youtube.com/embed/2X0GdFzfv3A?autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 5 - Mobile radar + NHC tropical outlook, rotating
  [
    ["MOBILE RADAR (KMOB)", "NHC 7-DAY TROPICAL OUTLOOK"],
    "https://radar.weather.gov/ridge/standard/KMOB_loop.gif",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png",
  ],
  // 6 - GOES-19 Southeast/Gulf satellite
  [
    "GOES-19 GULF/SE",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/se/GEOCOLOR/GOES19-SE-GEOCOLOR-600x600.gif",
  ],
];

// Image rotation intervals in milliseconds per tile
var tileDelay = [
  86400000, 86400000, 86400000, 86400000, 60600, 60700,
];

var aRSS = [
  ["https://api.weather.gov/alerts/active.atom?area=FL", 30],
];

// CUT END

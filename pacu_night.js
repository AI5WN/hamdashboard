// CUT START
// St. Francis PACU - Night Shift page (loaded by pacudash.html)
//
// Follow-the-sun world cams for the 2030-0700 crew: iconic places that are
// lit while it's dark in Oklahoma. The page picks its cam set from the
// current Oklahoma time and reloads itself hourly so it follows the sun
// across Europe and Africa all shift with no clicks:
//
//   - DAYLIGHT set (2230-1030 OK): Europe at sunrise/morning + African
//     waterholes at golden hour
//   - NIGHT-LIGHTS set (1030-2230 OK): the same places city-lit at night +
//     Etosha's famous floodlit Okaukuejo waterhole (rhino and elephant
//     visit it after dark)
//
// Force a set for testing or preference by adding &band=day or &band=night
// to the page URL. Right-click any tile for its alternate stream.
const disableSetup = false;
const disableLdCfg = true;
var topBarCenterText = "St. Francis PACU - Night Shift";

// Show the PACU staffing strip here too (same board as the main page;
// entries are shared browser-wide and editable from any page)
var showStaffBar = true;

// Grid layout desired (3x3 = all nine places at once)
var layout_cols = 3;
var layout_rows = 3;

// Menu items
// Structure is [HTML color code, menu text, target URL, scale, side ("R" = right)]
var aURL = [
  [
    "2196F3",
    "EARTH AT NIGHT",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-30,30,350",
    "1",
    "R",
  ],
];

// ---- Follow-the-sun band selection -------------------------------------
// Daylight over Europe/Africa corresponds to 2230-1030 Oklahoma time.
// Compute "minutes since midnight" in America/Chicago (not the TV's raw
// clock, though on the PACU TVs they should be the same thing).
var nightBand = (function () {
  var params = new URLSearchParams(window.location.search);
  var forced = (params.get("band") || "").toLowerCase();
  if (forced === "day") return "day";
  if (forced === "night") return "night";
  var mins;
  try {
    var parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Chicago",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }).formatToParts(new Date()).reduce(function (acc, p) {
      acc[p.type] = p.value;
      return acc;
    }, {});
    var h = parseInt(parts.hour, 10);
    if (h === 24) h = 0;
    mins = h * 60 + parseInt(parts.minute, 10);
  } catch (e) {
    var now = new Date();
    mins = now.getHours() * 60 + now.getMinutes();
  }
  // Daylight over Europe/Africa: 22:30 -> 10:30 Oklahoma time
  return (mins >= 22 * 60 + 30 || mins < 10 * 60 + 30) ? "day" : "night";
})();

// Re-evaluate the band every hour so a TV parked here follows the sun
setInterval(function () { window.location.reload(); }, 60 * 60 * 1000);

// ---- Cam sets ----------------------------------------------------------
// Shared 24/7 streams, re-titled and re-ordered per band. If a stream dies
// (YouTube live IDs change when a stream restarts), right-click the tile
// for its alternate, and update the ID here from the channel's /streams page.
var CAM = {
  // veniceCanal + templeBar IDs were confirmed live by the night crew
  veniceCanal: "iframe|https://www.youtube.com/embed/r8N6IsoIkTk?autoplay=1&mute=1&playsinline=1&rel=0",
  veniceRialto: "iframe|https://www.youtube.com/embed/Kmf_wiTFuXY?autoplay=1&mute=1&playsinline=1&rel=0",
  veniceRialtoAlt: "iframe|https://www.youtube.com/embed/CMn6xQXuSjI?autoplay=1&mute=1&playsinline=1&rel=0",
  abbeyRoad: "iframe|https://www.youtube.com/embed/M3EYAY2MftI?autoplay=1&mute=1&playsinline=1&rel=0",
  templeBar: "iframe|https://www.youtube.com/embed/3nyPER2kzqk?autoplay=1&mute=1&playsinline=1&rel=0",
  templeBarAlt: "iframe|https://www.youtube.com/embed/RtXT86TnXIU?autoplay=1&mute=1&playsinline=1&rel=0",
  prague: "iframe|https://www.youtube.com/embed/0FvTdT3EJY4?autoplay=1&mute=1&playsinline=1&rel=0",
  eiffel: "iframe|https://www.youtube.com/embed/iZipA1LL_sU?autoplay=1&mute=1&playsinline=1&rel=0",
  vegas: "iframe|https://www.youtube.com/embed/_XJa-HI33ss?autoplay=1&mute=1&playsinline=1&rel=0",
  vegasAlt: "iframe|https://www.youtube.com/embed/mmSKBT_nTfY?autoplay=1&mute=1&playsinline=1&rel=0",
  fremont: "iframe|https://www.youtube.com/embed/ZvYvZLfPatQ?autoplay=1&mute=1&playsinline=1&rel=0",
  timesSquare: "iframe|https://www.youtube.com/embed/Q0uLV52xGZE?autoplay=1&mute=1&playsinline=1&rel=0",
  timesSquareAlt: "iframe|https://www.youtube.com/embed/z-jYdOIKcTQ?autoplay=1&mute=1&playsinline=1&rel=0",
  okaukuejo: "iframe|https://www.youtube.com/embed/AeMUdOPFcXI?autoplay=1&mute=1&playsinline=1&rel=0",
  okaukuejoAlt: "iframe|https://www.youtube.com/embed/JMMoRwYo5kE?autoplay=1&mute=1&playsinline=1&rel=0",
  namibDesert: "iframe|https://www.youtube.com/embed/ydYDqZQpim8?autoplay=1&mute=1&playsinline=1&rel=0",
  namibDesertAlt: "iframe|https://www.youtube.com/embed/gC43pyCDi4M?autoplay=1&mute=1&playsinline=1&rel=0",
  tembe: "iframe|https://www.youtube.com/embed/0P_LBKqVbfs?autoplay=1&mute=1&playsinline=1&rel=0",
};

var aIMG;
if (nightBand === "day") {
  // Europe morning + African waterholes in daylight + the cities that
  // never turn their lights off
  aIMG = [
    [
      ["VENICE - GRAND CANAL", "VENICE - RIALTO BRIDGE", "VENICE - RIALTO (ALT)"],
      CAM.veniceCanal, CAM.veniceRialto, CAM.veniceRialtoAlt,
    ],
    ["LONDON - ABBEY ROAD CROSSING", CAM.abbeyRoad],
    [
      ["DUBLIN - TEMPLE BAR", "DUBLIN - TEMPLE BAR (ALT)"],
      CAM.templeBar, CAM.templeBarAlt,
    ],
    ["PRAGUE - OLD TOWN", CAM.prague],
    ["PARIS - EIFFEL TOWER", CAM.eiffel],
    [
      ["ETOSHA - OKAUKUEJO WATERHOLE", "OKAUKUEJO - ALT STREAM"],
      CAM.okaukuejo, CAM.okaukuejoAlt,
    ],
    [
      ["NAMIB DESERT WATERHOLE", "NAMIB WATERHOLE - ALT", "TEMBE ELEPHANTS - SOUTH AFRICA"],
      CAM.namibDesert, CAM.namibDesertAlt, CAM.tembe,
    ],
    [
      ["LAS VEGAS STRIP", "LAS VEGAS STRIP (ALT)", "FREMONT STREET - VEGAS"],
      CAM.vegas, CAM.vegasAlt, CAM.fremont,
    ],
    [
      ["NYC - TIMES SQUARE (EARTHCAM 4K)", "TIMES SQUARE - CROSSROADS"],
      CAM.timesSquare, CAM.timesSquareAlt,
    ],
  ];
} else {
  // Europe city lights + floodlit / infrared waterholes + Vegas and
  // Times Square in full glow
  aIMG = [
    [
      ["VENICE BY NIGHT - GRAND CANAL", "VENICE BY NIGHT - RIALTO", "VENICE - RIALTO (ALT)"],
      CAM.veniceCanal, CAM.veniceRialto, CAM.veniceRialtoAlt,
    ],
    ["LONDON BY NIGHT - ABBEY ROAD", CAM.abbeyRoad],
    [
      ["DUBLIN - TEMPLE BAR LIGHTS", "DUBLIN - TEMPLE BAR (ALT)"],
      CAM.templeBar, CAM.templeBarAlt,
    ],
    ["PRAGUE BY NIGHT - OLD TOWN", CAM.prague],
    ["PARIS - EIFFEL TOWER LIGHTS", CAM.eiffel],
    [
      ["ETOSHA - FLOODLIT OKAUKUEJO WATERHOLE", "OKAUKUEJO - ALT STREAM"],
      CAM.okaukuejo, CAM.okaukuejoAlt,
    ],
    [
      ["TEMBE ELEPHANTS - NIGHT CAM", "NAMIB DESERT WATERHOLE"],
      CAM.tembe, CAM.namibDesert,
    ],
    [
      ["LAS VEGAS STRIP - LIT", "LAS VEGAS STRIP (ALT)", "FREMONT STREET - VEGAS"],
      CAM.vegas, CAM.vegasAlt, CAM.fremont,
    ],
    [
      ["NYC - TIMES SQUARE LIGHTS (4K)", "TIMES SQUARE - CROSSROADS"],
      CAM.timesSquare, CAM.timesSquareAlt,
    ],
  ];
}

// Image rotation intervals in milliseconds per tile (static; right-click
// flips alternates, and the hourly reload handles the band change)
var tileDelay = [
  86400000, 86400000, 86400000,
  86400000, 86400000, 86400000,
  86400000, 86400000, 86400000,
];

var aRSS = [
  ["https://api.weather.gov/alerts/active.atom?area=OK", 30],
];

// CUT END

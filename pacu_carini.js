// CUT START
// St. Francis PACU - Carini jiu-jitsu page (loaded by pacudash.html)
//
// Each tile plays a YouTube channel's uploads as an auto-advancing playlist
// (loop=1 restarts the playlist when it runs out, so the mats never close).
// Tiles start muted per browser autoplay rules; double-click a tile to
// unlock it, then use the player controls for sound.
const disableSetup = false;
const disableLdCfg = true;
var topBarCenterText = "St. Francis PACU - Carini Jiu-Jitsu";

// Show the PACU staffing strip here too (same board as the main page;
// entries are shared browser-wide and editable from any page)
var showStaffBar = true;

// Grid layout desired (2x2 = big tiles)
var layout_cols = 2;
var layout_rows = 2;

// Menu items
// Structure is [HTML color code, menu text, target URL, scale, side ("R" = right)]
var aURL = [
  ["4CAF50", "CHEWJITSU", "newtab|https://www.youtube.com/channel/UCGCZBBvu7ZnqHYHuScODbAQ", "1"],
  ["4CAF50", "GRACIE", "newtab|https://www.youtube.com/channel/UCNMZWa1QP42jHrmmzayFEeg", "1"],
  ["4CAF50", "JORDAN BJJ", "newtab|https://www.youtube.com/channel/UCexKjyhZ5EvBTWyg6U6e5Og", "1"],
];

// Dashboard tiles (2 cols x 2 rows = 4 big tiles)
var aIMG = [
  // 1 - Chewjitsu (Nick "Chewy" Albin): technique breakdowns + training advice
  [
    "CHEWJITSU - TECHNIQUES & TRAINING",
    "iframe|https://www.youtube.com/embed/videoseries?list=UUGCZBBvu7ZnqHYHuScODbAQ&autoplay=1&mute=1&playsinline=1&rel=0&loop=1",
  ],
  // 2 - Gracie Breakdown (Ryron & Rener Gracie): technique breakdowns
  [
    "GRACIE BREAKDOWN",
    "iframe|https://www.youtube.com/embed/videoseries?list=UUNMZWa1QP42jHrmmzayFEeg&autoplay=1&mute=1&playsinline=1&rel=0&loop=1",
  ],
  // 3 - Jordan Teaches Jiujitsu: concept-first technique instruction
  [
    "JORDAN TEACHES JIUJITSU",
    "iframe|https://www.youtube.com/embed/videoseries?list=UUexKjyhZ5EvBTWyg6U6e5Og&autoplay=1&mute=1&playsinline=1&rel=0&loop=1",
  ],
  // 4 - Jiu-Jitsu Channel: more rolling and technique
  [
    "JIU-JITSU CHANNEL",
    "iframe|https://www.youtube.com/embed/videoseries?list=UU8hWr71zzP1CPszL1cSC9sA&autoplay=1&mute=1&playsinline=1&rel=0&loop=1",
  ],
];

// Image rotation intervals in milliseconds per tile (static; the playlists
// advance and loop themselves)
var tileDelay = [
  86400000, 86400000, 86400000, 86400000,
];

var aRSS = [
  ["https://api.weather.gov/alerts/active.atom?area=OK", 30],
];

// CUT END

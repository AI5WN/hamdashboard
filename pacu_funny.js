// CUT START
// St. Francis PACU - Funny TV page (loaded by pacudash.html)
//
// FailArmy / The Pet Collective's true 24/7 channels live on Pluto/Sling
// style platforms that can't be embedded, so these tiles use auto-advancing
// YouTube playlists instead - they roll from video to video continuously
// like a channel. Tiles are muted (browser autoplay rules); double-click a
// tile to unlock it, then use the player controls for sound.
const disableSetup = false;
const disableLdCfg = true;
var topBarCenterText = "St. Francis PACU - Funny TV";

// Show the PACU staffing strip here too (same board as the main page;
// entries are shared browser-wide and editable from any page)
var showStaffBar = true;

// Grid layout desired (2x2 = big tiles, TV style)
var layout_cols = 2;
var layout_rows = 2;

// Menu items
// Structure is [HTML color code, menu text, target URL, scale, side ("R" = right)]
var aURL = [
  ["9C27B0", "JELLY CAM", "pacu_jelly.js"],
];

// Dashboard tiles (2 cols x 2 rows = 4 big tiles)
var aIMG = [
  // 1 - America's Funniest Home Videos: official channel uploads,
  //     auto-advancing newest-first
  [
    "AFV - AMERICA'S FUNNIEST",
    "iframe|https://www.youtube.com/embed/videoseries?list=UU_zEzzq54Rm0iy7lmmZbCIg&autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 2 - Totally Funny Animals (from the makers of AFV), auto-advancing
  [
    "TOTALLY FUNNY ANIMALS",
    "iframe|https://www.youtube.com/embed/videoseries?list=UUuI80PeuuCYHXxBj7r_0OAg&autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 3 - FailArmy's Funny Animal Fails playlist, auto-advancing
  [
    "FAILARMY - PET FAILS",
    "iframe|https://www.youtube.com/embed/videoseries?list=PLOWSbqDrrI5QxVTSphTpXxs8lpwIB-yg1&autoplay=1&mute=1&playsinline=1&rel=0",
  ],
  // 4 - Best of FailArmy compilation on a permanent loop
  [
    "BEST OF FAILARMY (LOOP)",
    "iframe|https://www.youtube.com/embed/HiZNNoW8AdY?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=HiZNNoW8AdY",
  ],
];

// Image rotation intervals in milliseconds per tile (static; the playlists
// advance themselves)
var tileDelay = [
  86400000, 86400000, 86400000, 86400000,
];

var aRSS = [
  ["https://api.weather.gov/alerts/active.atom?area=OK", 30],
];

// CUT END

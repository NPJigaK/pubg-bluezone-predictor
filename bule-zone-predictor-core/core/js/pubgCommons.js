const MATCH_LIST_PAGE_URL = "matches.html";
const API_KEY_LIST_KEY = "apikeyList";
const APIKEY_KEY = "apiKey";
const CURRENT_TIME_KEY = "currentTime";

/**Map name enum */
const PUBG_MAPS = defineEnum({
  MIRAMAR: {
    original: "Desert_Main",
    name: "Miramar"
  },
  CLASSIC_ERANGEL: {
    original: "Erangel_Main",
    name: "Erangel(classic)"
  },
  SANHOK: {
    original: "Savage_Main",
    name: "Sanhok"
  },
  CAMP_JACKAL: {
    original: "Range_Main",
    name: "Camp Jackal"
  },
  VIKENDI: {
    original: "DihorOtok_Main",
    name: "Vikendi"
  },
  ERANGEL: {
    original: "Baltic_Main",
    name: "Erangel"
  },
  KARAKIN: {
    original: "Summerland_Main",
    name: "Karakin"
  }
});

/**
 * =============================================================
 * game mode converter wrapper
 */
function getPubgGameMode(gameMode) {
  let isESportsMode = "";
  if (gameMode.indexOf("esports") != -1) {
    isESportsMode = "eSports-";
  }
  
  if (gameMode.indexOf("solo") != -1) {
    return isESportsMode + "Solo";
  } else if (gameMode.indexOf("duo") != -1) {
    return isESportsMode + "Duos";
  } else if (gameMode.indexOf("squad") != -1) {
    return isESportsMode + "Squad";
  } else {
    return "0"; // ToDo
  }
}

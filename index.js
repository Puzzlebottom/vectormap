import {renderMap, renderLocations} from "./map.js"
import {DUMMY_DATA} from "./DUMMY_DATA.js";

$(document).ready(() => {
  const map = document.querySelector('table')
  renderMap(map)
  renderLocations(allLocations)
});

const allLocations = [...DUMMY_DATA]









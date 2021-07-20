import {Location} from "./Location.js";

export const renderMap = (map) => {
  for(let y = 25; y >= -25; y--) {
    let row = map.insertRow()
    row.id = 'y' + y
    renderCell(row, y)
  }
}

const renderCell = (row, y) => {
  for (let x = -25; x <= 25; x++) {
    let cell = row.insertCell()
    cell.id = 'x' + x
    cell.className = 'emptySpace'
  }
}

const selectCellByCoords = (coords) => {
  const x = '#x' + coords[0]
  const y = '#y' + coords[1]
  const row = document.querySelector(y)
  return row.querySelector(x)
}

export const renderLocations = (location) => {
  location.forEach(element => {
    const location = new Location(element.id, element.label, element.origin, element.direction, element.distance)
    const coords = location.getAttribute('coords')
    const cell = selectCellByCoords(coords)
    cell.className = 'location'
    const label = document.createElement('div')
    label.className = 'label'
    label.innerHTML = location.getAttribute('label')
    cell.appendChild(label)
  })
}

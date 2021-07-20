export class Location {
  constructor(id, label, origin, direction, distance) {
    this.id = id
    this.label = label
    this.origin = origin
    this.direction = direction
    this.distance = distance
    this.coords = this.calculateCoords()
  }

  getAttribute = (attribute) => {
    return this[attribute]
  }

  directionInRad = () => {
    return this.direction*Math.PI/180
  }

  calculateCoords = () => {
    const originX = this.origin[0]
    const originY = this.origin[1]
    const theta = this.directionInRad()
    const magnitude = this.distance
    const x = magnitude * Math.cos(theta) + originX
    const y = magnitude * Math.sin(theta) + originY
    return [Math.round(x), Math.round(y)]
  }
}
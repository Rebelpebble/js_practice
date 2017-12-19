class Weapons {
  constructor(model, ammo, capacity) {
    this._model = model
    this._ammo = ammo
    this._capacity = capacity
  }

  get capacityOfWeapon() {
    return this._capacity
  }

  printWeaponInformation() {
    console.log("This is a:" + this._model + "that uses" + this._ammo)
  }

  get serialNumber() {
    return this._serialNumber
  }

  static generateSerialNumber() {
    this._serialNumber = Math.floor(Math.random() * 10000)
  }
}

class AssultRifle extends Weapons {
  constructor(name, ammo, capacity) {
    super(name, ammo, capacity)
    this._firingStyle = 'semi-auto'
  }

  get firingStyle() {
    return this._firingStyle
  }
}

const briansGun = new AssultRifle('AK47', 7.62, 50)
briansGun.super.generateSerialNumber()
briansGun.serialNumber()

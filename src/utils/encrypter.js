const bcrypt = require('bcrypt')

module.exports = class Encrypter {
  async compare (value, hashedPValue) {
    const isValid = await bcrypt.compare(value, hashedPValue)
    return isValid
  }
}

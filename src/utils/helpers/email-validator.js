const validator = require('validator')
const { MissingParamError } = require('../errors')

module.exports = class EmailValidator {
  async isValid (email) {
    if (!email) {
      throw new MissingParamError('email')
    }
    return validator.isEmail(email)
  }
}

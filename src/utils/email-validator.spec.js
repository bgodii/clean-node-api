const validator = require('validator')

class EmailValidator {
  async isValid (email) {
    return validator.isEmail(email)
  }
}

describe('Email Validator', () => {
  test('Should return true if validator returns true', async () => {
    const sut = new EmailValidator()
    const isEmailValid = await sut.isValid('valid_email@mail.com')
    expect(isEmailValid).toBe(true)
  })

  test('Should return true if validator returns true', async () => {
    const sut = new EmailValidator()
    validator.isEmailValid = false
    const isEmailValid = await sut.isValid('false_email@mail.com')
    expect(isEmailValid).toBe(false)
  })
})

const validator = require('validator')

class EmailValidator {
  async isValid (email) {
    return validator.isEmail(email)
  }
}

const makeSut = () => {
  return new EmailValidator()
}

describe('Email Validator', () => {
  test('Should return true if validator returns true', async () => {
    const sut = makeSut()
    const isEmailValid = await sut.isValid('valid_email@mail.com')
    expect(isEmailValid).toBe(true)
  })

  test('Should return false if validator returns true', async () => {
    const sut = makeSut()
    validator.isEmailValid = false
    const isEmailValid = await sut.isValid('false_email@mail.com')
    expect(isEmailValid).toBe(false)
  })

  test('Should call validator with correct email', async () => {
    const sut = makeSut()
    await sut.isValid('any_email@mail.com')
    expect(validator.email).toBe('any_email@mail.com')
  })
})

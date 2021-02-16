const validator = require('validator')
const EmailValidator = require('./email-validator')
const { MissingParamError } = require('./errors')

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

  test('Should throw if no params are provided', async () => {
    const sut = makeSut()
    expect(() => sut.isValid()).rejects.toThrow(new MissingParamError('email'))
  })
})

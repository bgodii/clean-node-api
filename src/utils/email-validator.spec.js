class EmailValidator {
  async isValid (email) {
    return true
  }
}

describe('Email Validator', () => {
  test('Should return true if validator returns true', async () => {
    const sut = new EmailValidator()
    const isEmailValid = await sut.isValid('valid_email@mail.com')
    expect(isEmailValid).toBe(true)
  })
})
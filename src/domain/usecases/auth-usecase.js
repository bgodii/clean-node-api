module.exports = class AuthUseCase {
  async auth (email, password) {
    if (!email) {
      throw new Error()
    }
  }
}

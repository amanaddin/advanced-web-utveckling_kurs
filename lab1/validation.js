class Validation {
  constructor() {
    this.namePattern = /^[A-Za-z]+$/;
    this.addressPattern = /^[A-Za-z0-9\s,.'-]+$/;
    this.emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  }

  isValidName(name) {
    return this.namePattern.test(name);
  }

  isValidAddress(address) {
    return this.addressPattern.test(address);
  }

  isValidEmail(email) {
    return this.emailPattern.test(email);
  }
}

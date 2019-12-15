export class User {
  private id: number;
  private name: string;
  private email: string;

  constructor(id: number, name: string, email: string) {
    if (!this.isValidEmail(email)) {
      throw new Error('The provided email is not a valid email');
    }
    this.id = id;
    this.name = name;
    this.email = email;
  }

  private isValidEmail(email: string) {
    return email.split('@').length === 2;
  }

  get() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    };
  }
}

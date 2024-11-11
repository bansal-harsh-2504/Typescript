console.log("Typescript is here");

class User {
  public email: string;
  name: string;
  private readonly country: string = "INDIA";
  protected age: number;
  constructor(email: string, name: string, public state: string, age: number) {
    this.email = email;
    this.name = name;
    this.state = state;
    this.age = age;
  }

  private deleteToken() {
    console.log("token deleted");
  }

  //getter
  get getCountry(): string {
    return this.country;
  }

  //setter - setters can not have any return type, not even void
  set setEmail(email: string) {
    if (email === "") {
      throw new Error("Invalid email.");
    }
    this.email = email;
  }
}

const harsh = new User("h@h.com", "harsh", "Delhi", 20);

console.log(harsh);
// harsh.setEmail = "h@gmail.com";
console.log(harsh.getCountry);

class SubUser extends User {
  isFamily: boolean = true;
  changeAge() {
    this.age++;
  }
}

export {};

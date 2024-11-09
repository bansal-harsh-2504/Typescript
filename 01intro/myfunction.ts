function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

addTwo(5);
getUpper("Hello");

function signUpUser(name: string, email: string, isPaid: boolean = false) {}

signUpUser("", "");

let loginUser = (name: string, email: string, isPaid: boolean) => {};

export {};

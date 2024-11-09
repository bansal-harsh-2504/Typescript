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

const getValue = (str: string): string => {
  return "";
};

const heroes = ["thor", "spiderman", "ironman"];
// const heroes = [1, 2, 3];

heroes.map((hero): string => {
  //   return 2;  //not allowed
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  //function never return a value and it is different from void. Never is used for errors and exceptions
  throw new Error(errmsg);
}

export {};

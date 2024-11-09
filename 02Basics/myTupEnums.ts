const user: (string | number)[] = [7, "hb", "rj"];

//precise order
const tuser: [number, string, string] = [7, "hb", "rj"];
tuser.push('4');

let rgb: [number, number, number] = [255,123,112]

type User = [number, string]

const newUser: User =  [112, "example@google.com"]

newUser[1] = "hb.com";

export {};

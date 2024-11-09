let score: number | string = 33;

score = "50";

type User = {
  name: string;
  id: Number;
};
type Admin = {
  username: string;
  id: Number;
};

let harsh: User | Admin = { name: "hitesh", id: 334 };

function getDbId(id: number | string) {
  //making some API calls
  console.log(`DB id is: ${id}`);

  // id.toLowerCase(); //not allowed because id could be number
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    //id is number
    id.toString();
  }
}

getDbId(3);
getDbId("3");

//array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
// const data3: number[]|string[] = [1,2,"3"] //will give error because either all members should be string or all should be number
const data4: (number | string | boolean)[] = [1, 2, "3", false];

let pi: 3.14 = 3.14; //this is like const
let seatAllotment: "aisle" | "middle" | "window"; //this is a good usecase, it is like enum

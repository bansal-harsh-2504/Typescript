const User = {
  name: "harsh",
  email: "harsh@gmail.com",
  isPaid: false,
};

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

createUser({ name: "harsh", isPaid: false });

//weird(bad) behaviour
// createUser({ name: "harsh", isPaid: false, email:"" }); //not allowed
//but this is allowed
createUser(User);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

export {};

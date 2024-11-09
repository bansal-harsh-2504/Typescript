type User = {
  readonly _id: string; //if id would be array, then we can push values to array in case of readonly.
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: cardDetails; //? is for optional parameter
};

type cardNumber = {
  cardNumber: string;
};
type cardDate = {
  cardDate: string;
};
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

let myUser: User = {
  _id: "123",
  name: "h",
  email: "h@h.com",
  isActive: false,
};

myUser.email = "h@gmail.com";

export {};

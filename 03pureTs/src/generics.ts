const levels: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  capacity: number;
}

identityFour<Bottle>({ brand: "Myprotein", capacity: 900 });

export {};

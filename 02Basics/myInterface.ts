interface User {
  email: string;
  userId: number;
  readonly dbId?: number;
  //   startTrial: () => string
  // Or
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const harsh: User = {
  email: "h@h.com",
  userId: 1234,
  startTrial: () => {
    return "Trial started";
  },
  getCoupon: (name: "", off: 10) => {
    return 33;
  },
  githubToken: "jwt",
};

const bansal: Admin = {
  email: "h@h.com",
  userId: 1234,
  startTrial: () => {
    return "Trial started";
  },
  getCoupon: (name: "", off: 10) => {
    return 33;
  },
  githubToken: "jwt",
  role: "learner",
};

export {};

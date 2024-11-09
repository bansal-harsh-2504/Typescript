type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: "", email: "", isActive: false };
}

createUser({ name: "", email: "", isActive: true });

export {};

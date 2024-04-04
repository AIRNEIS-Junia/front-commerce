type UserInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type CreateUserInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type EditUserInput = {
  firstName: string;
  lastName: string;
  email: string;
  currentPassword: string;
  newPassword: string;
};

type UserSessionInput = {
  email: string;
  password: string;
};

export type { UserInput, CreateUserInput, EditUserInput, UserSessionInput };

type AddressType = {
  id?: string;
  name: string;
  firstName: string;
  lastName: string;
  phone: string;
  streetNumber: string;
  street: string;
  additional: string | undefined;
  zipCode: string;
  city: string;
  country: string;
};

type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  currentPassword?: string;
  newPassword?: string;
};

type AuthRegisterResponseType = {
  accessToken: string;
  refreshToken: string;
};

export type { AddressType, UserType, AuthRegisterResponseType };

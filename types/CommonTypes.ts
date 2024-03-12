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

type SearchParamProps = {
  searchParams: Record<string, string | undefined>;
  editShipping?: string;
  createShipping?: string;
};

export type { AddressType, SearchParamProps };

export interface IUserInfo {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  phone_number: string;
  address: {
    city: string;
    street_name: string;
    street_address: string;
    state: string;
    country: string;
    zip_code: string;
  };
}

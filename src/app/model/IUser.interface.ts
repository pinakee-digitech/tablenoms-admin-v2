export interface IUserResponse {
  message: string;
  user: IUser;
  token: string;
}

export interface IUser {
  id?: string;
  username?: string;
  password?: string;
  email?: string;
  phoneNumber?: string;
  defaulthotel?: string;
}

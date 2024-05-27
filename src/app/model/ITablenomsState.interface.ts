import { IMenu } from './IMenu.interface';
import { IUserResponse } from './IUser.interface';

export interface ITablenomsState {
  user: IUserResponse;
  menu?: IMenu;
}

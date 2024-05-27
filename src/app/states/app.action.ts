import { createAction, props } from '@ngrx/store';
import { IUser, IUserResponse } from '../model/IUser.interface';
import { IError } from '../model/IError.interface';

export const TablenomsActions = {
  TablenomsLogin: '[Tablenoms] Login',
  TablenomsLoginSuccess: '[Tablenoms] Login Success',
  TablenomsLoginFailure: '[Tablenoms] Login Failure',
  TablenomsRegister: '[Tablenoms] Register',
  TablenomsRegisterSuccess: '[Tablenoms] Register Success',
  TablenomsRegisterFailure: '[Tablenoms] Register Failure',
};

export const login = createAction(
  TablenomsActions.TablenomsLogin,
  props<{ user: IUser }>()
);

export const loginSuccess = createAction(
  TablenomsActions.TablenomsLoginSuccess,
  props<{ user: IUserResponse }>()
);

export const loginFailure = createAction(
  TablenomsActions.TablenomsLoginFailure,
  props<{ error: IError }>()
);

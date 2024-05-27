import { createReducer, on, Action } from '@ngrx/store';
import { ITablenomsState } from '../model/ITablenomsState.interface';
import { loginSuccess } from './app.action';

export const tablenomsFeatureKey = 'tablenoms';

const initialState: ITablenomsState = {
  user: {
    token: '',
    user: {
      username: '',
      password: '',
      email: '',
      phoneNumber: '',
    },
    message: '',
  },
};

export const TablenomsReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({ ...state, user }))
);

export function reducer(state: ITablenomsState, action: Action) {
  return TablenomsReducer(state, action);
}

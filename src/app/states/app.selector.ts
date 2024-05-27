import { State, createFeatureSelector, createSelector } from '@ngrx/store';
import { tablenomsFeatureKey } from './app.reducer';
import { ITablenomsState } from '../model/ITablenomsState.interface';

export const selectTablenomsFeature =
  createFeatureSelector<ITablenomsState>(tablenomsFeatureKey);

export const userSelector = createSelector(
  selectTablenomsFeature,
  ({ user }) => user
);

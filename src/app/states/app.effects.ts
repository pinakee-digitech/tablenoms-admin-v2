import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  TablenomsActions,
  login,
  loginFailure,
  loginSuccess,
} from './app.action';
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';

@Injectable()
export class TablenomsEffects {
  loginUser$ = createEffect(() => {
    console.log('sadsaaaaaaaaaaaaa');
    return this.actions$.pipe(
      ofType(login),
      exhaustMap((action) =>
        this.userService.tablenomsLogin(action.user).pipe(
          map((response) => {
            console.log(response);
            return loginSuccess({ user: response });
          }),
          catchError((_error) => of(loginFailure({ error: _error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private userService: UserService) {}
}

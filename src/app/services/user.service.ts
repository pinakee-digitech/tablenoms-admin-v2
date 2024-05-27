import { Injectable } from '@angular/core';
import { IUser, IUserResponse } from '../model/IUser.interface';
import { HttpClient } from '@angular/common/http';
import { hostServer } from '../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  tablenomsLogin(user: IUser): Observable<IUserResponse> {
    console.log('herwerewrwerfwerf');
    return this.httpClient.post<IUserResponse>(`${hostServer}/login`, user);
  }
}

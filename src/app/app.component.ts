import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from './states/app.action';
import { userSelector } from './states/app.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'tablenoms-admin-v2';
  test = this.store.select(userSelector);
  constructor(private store: Store) {}

  ngOnInit() {
    console.log('OnInit');
    this.store.dispatch(
      login({ user: { username: 'vivek', password: '12345' } })
    );
    this.test.subscribe((data) => console.log(data));
  }
}

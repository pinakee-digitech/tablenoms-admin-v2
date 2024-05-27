import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablenomsReducer, tablenomsFeatureKey } from './states/app.reducer';
import { TablenomsEffects } from './states/app.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot({}),
    StoreModule.forFeature(tablenomsFeatureKey, TablenomsReducer),
    EffectsModule.forRoot({}),
    EffectsModule.forFeature(TablenomsEffects),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

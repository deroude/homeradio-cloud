import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule, Effect } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppRoutingModule } from './app.routing.module';
import { AppMaterialModule } from './app.material.module';

import { environment } from '../environments/environment';

import { MainComponent } from './components/main/main.component';
import { AuthComponent } from './components/auth/auth.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


import { reducers } from './store/reducers';
import { AuthEffects } from './store/effects/auth';
import { ProgressEffects } from './store/effects/progress';
import { FirestoreService } from './services/firestore.service';
import { DeviceComponent } from './components/device/device.component';
import { DeviceEffects } from './store/effects/device';
import { GenreEffects } from './store/effects/genre';
import { StationEffects } from './store/effects/station';


@NgModule({
  declarations: [
    MainComponent,
    AuthComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    StoreModule.forRoot(reducers),
    // StoreRouterConnectingModule.forRoot({
    //   stateKey: 'router', // name of reducer key
    // }),
    StoreDevtoolsModule.instrument({
      maxAge: 15, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([AuthEffects, ProgressEffects, DeviceEffects, GenreEffects, StationEffects])
  ],
  providers: [AngularFireAuth, FirestoreService],
  bootstrap: [MainComponent],
  entryComponents: [LoginComponent, SignupComponent]
})
export class AppModule { }

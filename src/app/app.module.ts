import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database'
import {AngularFireStorageModule} from '@angular/fire/storage';
import { AuthService } from 'src/app/auth/services/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {CheckgGuard} from '../app/services/checkg.guard';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule

  ],
  providers: [AngularFireAuth, AngularFirestore, CheckgGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

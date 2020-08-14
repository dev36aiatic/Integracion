import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/comShare/navbar/navbar.component';


@NgModule({
  declarations: [LoginComponent,NavbarComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule

  ]
})
export class LoginModule { }

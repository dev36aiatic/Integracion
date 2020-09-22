import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {NavbarComponent} from 'src/app/comShare/navbar/navbar.component';




import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from  '@angular/material/icon';



@NgModule({
  declarations: [HomeComponent] ,
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule



  ]
})
export class HomeModule { }

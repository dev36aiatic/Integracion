import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import {MatToolbar} from '@angular/material/toolbar';
import {MatSidenav} from'@angular/material/sidenav';
import {MatIcon} from '@angular/material/icon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authSvc: AuthService) {

   }
   public user$: Observable<any> = this.authSvc.afAuth.user;
   public user : any;

   @ViewChild('sidenav') sidenav: MatSidenav;

  ngOnInit(): void {
  }

  salir(){
    this.authSvc.logout();
    console.log("salidooooo")
  }

  close(){
    this.sidenav.close();
  }


}





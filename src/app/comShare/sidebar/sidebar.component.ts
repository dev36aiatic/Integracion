import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../auth/services/auth.service';
import { auth } from 'firebase';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
  }

  salir(){
    this.authSvc.logout();
    console.log("salidooooo")
  }

}

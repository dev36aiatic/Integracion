import { Component, OnInit } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {HomeComponent} from 'src/app/home/home.component'
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

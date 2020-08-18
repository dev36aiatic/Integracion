import { Component, OnInit } from '@angular/core';
import {DataApiService} from 'src/app/services/data-api.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  public profiles=[];
  public profile='';

  ngOnInit(): void {
    this.dataApi.getAllProfile().subscribe(Profile => {
      console.log('Profiles', Profile);
    })
  }

}

import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {IntProfile} from 'src/app/interfaces/intProfile';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs:AngularFirestore) {
    this.profileCollection=afs.collection<IntProfile>('Profile');
    this.profile=this.profileCollection.valueChanges();
  }

  private profileCollection: AngularFirestoreCollection<IntProfile>;
  private profile: Observable<IntProfile[]>;



  getAllProfile(){
    return this.profile;
  }
  addProfile(){}
  updateProfile(){}
  deleteProfile(){}
}

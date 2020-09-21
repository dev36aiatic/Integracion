import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';
import {auth, User} from 'firebase/app'
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {
  public user:User;
  public userData$: Observable<firebase.User>

  constructor(public afAuth: AngularFireAuth) {

    this.userData$= afAuth.authState;
   }

  async onLogin(email:string, password:string){
    const res= await this.afAuth.signInWithEmailAndPassword(email,password);
    return res;
  }


  async onGoogleLogin()
  {

    try{
       return this.afAuth.signInWithPopup(
         new auth.GoogleAuthProvider
       );
    }
    catch(error){console.log(error)}

  }

  async onFbLogin(){

    try {

      return this.afAuth.signInWithPopup( new auth.FacebookAuthProvider);

    } catch (error)
    {console.log(error)
    }
  }


  async logout(){

    try{
      await this.afAuth.signOut();
    }
    catch(error){
      console.log(error)
    }

  }
}

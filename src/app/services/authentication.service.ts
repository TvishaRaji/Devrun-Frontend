import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import {
  Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
  UserCredential,
} from '@angular/fire/auth';
import { concatMap, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

currentUser$ = authState(this.auth)
constructor(private auth:Auth ){}

login(email: string, password: string){
  return from(signInWithEmailAndPassword(this.auth, email, password))
}
signUp(name:string,email:string, password:string){
  return from(createUserWithEmailAndPassword(this.auth,email,password))
}
logout(){
    return from(this.auth.signOut());
 }
}


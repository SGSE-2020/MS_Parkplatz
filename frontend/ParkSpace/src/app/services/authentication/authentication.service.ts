import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private angularFireAuth: AngularFireAuth,
              private router: Router) {
  }

  public get currentUserToken() {
    return this.angularFireAuth.currentUser;
  }

  login(email, password) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        return result.user.getIdToken(true);
      });
  }

  logout() {
    this.angularFireAuth.signOut().then(r => this.router.navigate(['/login']));
  }
}

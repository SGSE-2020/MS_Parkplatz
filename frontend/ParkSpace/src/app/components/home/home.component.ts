import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NavigationEnd, Router} from '@angular/router';
import {MatSidenav, MatSidenavContent} from '@angular/material/sidenav';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {UserService} from '../../services/user/user.service';
import {Observable} from 'rxjs';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: UserModel;

  screenWidth: number;

  @ViewChild('sidenav', {static: true}) public sidenav: MatSidenav;

  @ViewChild('sidenavContent') sidenavContent !: MatSidenavContent;

  // FIXME this is a workaround for the missing feature to automatically scroll to the top when

  constructor(private router: Router,
              public dialog: MatDialog,
              public  authenticationService: AuthenticationService,
              private userService: UserService) {
    this.screenWidth = window.innerWidth;
  }

  //  mat-sidenav-container uses the fullscreen attribute https://github.com/angular/components/issues/4280
  onActivate(e: any) {
    if (this.sidenavContent && this.sidenavContent.getElementRef().nativeElement) {
      this.sidenavContent.getElementRef().nativeElement.scrollTop = 0;
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    // Menu mode change
    this.screenWidth = window.innerWidth;

    // Menu auto hide
    this.checkMenu();
  }

  ngOnInit(): void {
    // scroll to top on navigation
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.userService.getUser().subscribe(x => this.user = x);
  }

  getUserDisplayname(): string {
    return this.user ? this.user.firstName + ' ' + this.user.lastName : '';
  }

  checkMenu() {
    const w = window.innerWidth;
    if (w > 840) {
      // this.sidenav.open();
    } else {
      this.sidenav.close();
    }
  }

  isMobile() {
    return window.innerWidth < 840;
  }

  toggleIfMobile() {
    if (window.innerWidth < 840) {
      this.sidenav.toggle(false);
    }
  }

  onRowClicked(item) {
    console.log(item);
  }

  logout() {
    this.authenticationService.logout();
  }

}

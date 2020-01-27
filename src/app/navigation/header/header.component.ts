import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuthenticated = false;
  private userSub: Subscription;
  loggedInUser: string;
  isLoggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user); {
        if (user) {
          this.isLoggedIn = true;      // shows email on toolbar after authenticated login
          this.loggedInUser = user.email;
        } else {
          this.isLoggedIn = false;
        }
      }
    });
  }

  onToggleSidenav() {
  this.sidenavToggle.emit();
  }
  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authSubscription = this.authenticationService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onToggleSidenav() {
  this.sidenavToggle.emit();
  }
  onLogout() {
    this.authenticationService.logout();
  }
 // ngOnDestroy() {
//    this.authSubscription.unsubscribe();
 // }
}

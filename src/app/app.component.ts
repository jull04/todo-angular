import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {

  constructor(public authService: AuthService){}

  handleLogout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.authService.updateUser();
  }
}

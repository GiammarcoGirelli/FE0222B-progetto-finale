import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  loggato: any

  ngOnInit(): void {
    this.loggato = localStorage.getItem('utentecorrente')
  }

  utenteLoggato(): boolean {
    return localStorage.getItem('utentecorrente') !== null;
  }

  logoutNavbar() {
    this.authService.logout();
  }
}

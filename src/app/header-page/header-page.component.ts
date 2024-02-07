import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  logout() {
    this.auth.logout();
  }

}

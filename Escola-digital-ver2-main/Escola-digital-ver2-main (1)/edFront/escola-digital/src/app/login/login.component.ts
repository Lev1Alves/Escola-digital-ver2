import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, RouterModule]
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/home']);
  }
  professor() {
    this.router.navigate(['/professor']);
  }
}

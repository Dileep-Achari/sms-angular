// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    const payload = {
      USER_NAME: this.username,
      PASSWORD: this.password
    };

    this.http.post('https://apk.doctor9.com/doctor/auth', payload, {
      headers: { deviceid: "postman" }
    }).subscribe(
      (response: any) => {
        if (response && response.TOKEN) {
          localStorage.setItem('token', response.TOKEN); // Save token in local storage
          this.router.navigate(['/sms-page']); // Navigate to the SMS page after login
        } else {
          this.errorMessage = 'Invalid response from server';
        }
      },
      error => {
        this.errorMessage = 'Invalid credentials';
      }
    );
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  keepSignedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    const requestBody = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>('https://www.localtvservice.com/api/v1/login', requestBody)
      .subscribe(
        response => {
          const name = response.data.name;
          const email = response.data.email;
          const role = response.data.roles[0];
          const sessionID = response.data.token;

          // Store the "keepSignedIn" value in localStorage
          localStorage.setItem('keepSignedIn', String(this.keepSignedIn));

          // Store the user data and session ID in localStorage
          localStorage.setItem('name', name);
          localStorage.setItem('email', email);
          localStorage.setItem('role', role);
          localStorage.setItem('sessionID', sessionID);

          // Redirect to the home page or another page as desired
          this.router.navigate(['/home']);
        },
        error => {
          console.log('Request failed. Returned status of ' + error.status);
          // Show invalid login credentials message
          const resultContainer = document.getElementById('result-container');
          if (resultContainer) {
            resultContainer.innerHTML = 'Invalid login. Please check your email and password.';
          } else {
            console.error('resultContainer is null or not found.');
          }
        }
      );
  }
}
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  alertMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const url = 'https://www.localtvservice.com/api/v1/register';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(url, { name: this.name, email: this.email, password: this.password }, { headers })
      .subscribe(
        (response: any) => {
          console.log(response);
          const sessionID = response.token;

          // Store the session ID in localStorage
          localStorage.setItem('sessionID', sessionID);

          // Redirect to the login page
          this.router.navigate(['/login']);
        },
        (error: any) => {
          console.log('Request failed. Returned status of ' + error.status);
          this.alertMessage = 'Invalid Inputs';
        }
      );
  }
}
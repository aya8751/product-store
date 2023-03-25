import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string="";
  password: string ="";

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.username, this.password)
    .subscribe({
      next: (response) => {
        this.router.navigate(['/products']);
        // console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}

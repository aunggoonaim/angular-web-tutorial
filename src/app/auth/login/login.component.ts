import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email?: string;
  password?: string;
  loading = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.loginService.postUserLogin(this.email, this.password).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.token) {
          localStorage.setItem('access_token', response.token);
          alert('เข้าสู่ระบบสำเร็จ !');
        }
      },
      error: (err) => {
        this.loading = false;
        alert('ไม่สามารถเชื่อมต่อฐานข้อมูลได้ !');
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  
  isLoggedIn = localStorage.getItem("isLoggedIn") == "true" ? true : false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    const { username, password } = this.form;
    if (username == "ivan" && password == "123456") {
      localStorage.setItem("isLoggedIn", "true")
      this.reloadPage()
    } 
  }

  reloadPage(): void {
    window.location.reload()
  }

}

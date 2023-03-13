import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: any = {
    username: null,
    password: null
  };

  title = 'NaUKMA Schedule';
  isLoggedIn = localStorage.getItem("isLoggedIn") == "true" ? true : false;
  userColor1 = "#000000";
  userColor2 = "#ffffff";

  reloadPage(): void {
    window.location.reload()
  }

  logout(): void {
    localStorage.setItem("isLoggedIn", "false")
  }
}

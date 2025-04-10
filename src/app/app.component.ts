import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'spark-advocate';

  // isLoginVisible = false;  

  
  // onLoginClick() {
  //   this.isLoginVisible = !this.isLoginVisible;
  // }
  
  // closeLoginForm() {
  //   this.isLoginVisible = false;
  // }
}

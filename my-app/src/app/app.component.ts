import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './component/user-list/user-list.component';
import { User } from '../model/user';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, CommonModule, NavbarComponent,LoginComponent,SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  users = [
    { name: " ramesh", isSingle: true, salary: 1000 },
    { name: " suresh", isSingle: false, salary: 2000 },
    { name: " dinesh", isSingle: true, salary: 3000 },
  ]

  // recieveddata(e:string){
  // console.log(e)
  // }
  recieveddata(e: User) {
    console.log(e)
  }
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user!: User;
  id: any;
  registerError: any;


  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(){
  }

  onSubmit(value: User) {
    if (value.email.includes("@tatasky.com")) {
      value.role = "admin";
    } else {
      value.role = "user"
    }
    this.registerUsers(value);
  }
  registerUsers(value: User) {
    console.log(value);
    this.userService.register(value).subscribe(data => { console.log(data) },
      error => { this.registerError = error, console.log(this.registerError) });
    // this.navigateToLogin();
  }  
}

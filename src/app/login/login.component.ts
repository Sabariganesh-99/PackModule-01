import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public result:boolean | undefined;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(value:any,value_2:any){
    console.log(value);
    // this.userService.
    
  }
  // OnLogin(email:any){
  //   let matcher = new RegExp("^[a-zA-Z0-9+_.-]+@tatasky.com+$");
  //   this.result = matcher.test(email);
  //   if(this.result==true)
  //   {
  //     this.navigateToAdmin();
  //   }
  //   else
  //   {
  //     this.navigateToLogin();
  //   }

  // }
  // navigateToAdmin() {
  //   this.router.navigate(["/admin"]);
  // }
  // navigateToLogin() {
  //   this.router.navigate(["/login"]);
  // }

  registerNow(){
    
  }

}

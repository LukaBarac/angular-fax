import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 

  errorExists!: boolean;
  errorText = "";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(form : NgForm) {
    /* iteracija 1 
    console.log(form); 
    */
   var email = form.value.email;
   var password = form.value.password;
   var user = this.userService.getUser(email);
   if(!user) {
     this.errorExists = true;
     this.errorText = "There is no registered user with email " + email;
     return;
   }
   var isPasswordValid = this.userService.isPasswordCorrect(email, password);
   if(!isPasswordValid) {
     this.errorExists = true;
     this.errorText = "Password is incorrect";
     return;
   }
   this.errorExists = false;
   this.router.navigate(['']);
  }
}

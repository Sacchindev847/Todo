import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router : Router){

  }
  ngOnInit(): void {
    
  }
  userName = 'Sachin'
  password = ''
  errorMessage = 'Invalid Crediantial'
  isInvalidCred = false
  
  handleLogin(){
    console.log(this.userName)
    console.log(this.password)
    console.log(this.isInvalidCred)
    if(this.userName == 'Sachin' && this.password == 'dummy'){
      this.router.navigate(['welcome', this.userName])
      this.isInvalidCred = false
    }
    else{
      this.isInvalidCred = true
    }
  }
}

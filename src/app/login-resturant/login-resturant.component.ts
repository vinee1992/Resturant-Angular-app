import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-resturant',
  templateUrl: './login-resturant.component.html',
  styleUrls: ['./login-resturant.component.css']
})
export class LoginResturantComponent implements OnInit {

  log : Register = new  Register();
  flag : boolean = true;

  login(){
    console.log(this.log.email)
  
    if(this.log.email == 'admin' && this.log.pwd == 'admin'){

      this.flag =true;

      this.router.navigate(['/list']);
    } else{
      this.flag =false;
    }
  }
  closeAlert(){
    this.flag = true;
  }
  constructor(private router :Router) { }

  ngOnInit(): void {
  }

}

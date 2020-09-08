import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Register } from '../register';

@Component({
  selector: 'app-register-resturant',
  templateUrl: './register-resturant.component.html',
  styleUrls: ['./register-resturant.component.css']
})
export class RegisterResturantComponent implements OnInit {

  registerResturant : Register = new Register();
  flag : boolean = false;

  constructor(private cmnsrvc :CommonService) { }

  closeAlert (){
    this.flag =false;
  }

  register(){

    this.cmnsrvc.registerResturant(this.registerResturant)
    .subscribe(data => {
      console.log(data) 
      this.flag =true;
      this.registerResturant = new Register();
    }
    
    , error => console.log(error));
  }
  ngOnInit(): void {

  }

}

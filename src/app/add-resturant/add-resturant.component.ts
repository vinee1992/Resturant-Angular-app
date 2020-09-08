import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Common } from '../common';

@Component({
  selector: 'app-add-resturant',
  templateUrl: './add-resturant.component.html',
  styleUrls: ['./add-resturant.component.css']
})
export class AddResturantComponent implements OnInit {

  common : Common = new Common();
  alert : boolean =false;

  constructor(private commonSrvc : CommonService) { }
  onSubmit(){
    console.log(this.common)
   this.commonSrvc.addResturant(this.common)
   .subscribe(data => {
     console.log(data)
   }, error => console.log(error))
   this.alert = true;
   this.common =  new Common();
  }

closeAlert(){
  this.alert = false;
}
  ngOnInit(): void {
  }

}

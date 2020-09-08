import { Component, OnInit } from '@angular/core';
import { Common } from '../common';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-resturant',
  templateUrl: './update-resturant.component.html',
  styleUrls: ['./update-resturant.component.css']
})
export class UpdateResturantComponent implements OnInit {
  common : Common = new Common();
  alert : boolean =false;

  constructor(private commonSrvc : CommonService,private router : ActivatedRoute,private route : Router) { }

  onUpdate(){
    console.log(this.common)
   this.commonSrvc.updateResturant(this.router.snapshot.params.id,this.common)
   .subscribe(data => {
     console.log(data)
   }, error => console.log(error))
   this.alert = true;
   this.common =  new Common();
   this.route.navigate(['list']);
  }

closeAlert(){
  this.alert = false;
}

 

  ngOnInit(): void {

    console.log(this.router.snapshot.params.id)
    this.commonSrvc.getResturant(this.router.snapshot.params.id)
    .subscribe(result =>
      {
        
       this.common = result;
       console.log(this.common)
      
      });
  }

}

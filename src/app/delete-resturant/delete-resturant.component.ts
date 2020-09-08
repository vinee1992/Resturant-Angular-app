import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-delete-resturant',
  templateUrl: './delete-resturant.component.html',
  styleUrls: ['./delete-resturant.component.css']
})
export class DeleteResturantComponent implements OnInit {

  constructor(private commonSrvc : CommonService,private router : ActivatedRoute,private route : Router) { }

 
flag : boolean  = false;

  ngOnInit(): void {
    
    this.commonSrvc.deleteResturant(this.router.snapshot.params.id)
      .subscribe(
        data => {
          console.log(data);
          
        },
        error => console.log(error));
        this.flag = true;
       // this.route.navigate(['/list'])
        
  }

  closeAlert(){
    this.flag = false;
    this.route.navigate(['/list']);
  }

}

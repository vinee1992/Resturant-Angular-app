import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-resturant',
  templateUrl: './list-resturant.component.html',
  styleUrls: ['./list-resturant.component.css']
})
export class ListResturantComponent implements OnInit {

  collection :any;

  constructor(private commonSrc : CommonService, private router : ActivatedRoute) { }

 
 
 
  ngOnInit(): void {
    
    
    this.commonSrc.getResturantList().subscribe(data =>{
     
      this.collection = data;
      console.log(this.collection);
    }, error => console.log(error))
  }

}

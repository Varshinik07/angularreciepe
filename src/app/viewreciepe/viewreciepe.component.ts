import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewreciepe',
  templateUrl: './viewreciepe.component.html',
  styleUrls: ['./viewreciepe.component.css']
})
export class ViewreciepeComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewReciepe().subscribe(
      (data)=>{
        this.viewReciepe=data
      }
    )
  }


  viewReciepe:any=[]
  ngOnInit(): void {
  }

}

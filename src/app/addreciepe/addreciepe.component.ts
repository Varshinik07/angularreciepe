import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addreciepe',
  templateUrl: './addreciepe.component.html',
  styleUrls: ['./addreciepe.component.css']
})
export class AddreciepeComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  reciepename=""
description=""
flavour=""
color=""


  readValues=()=>{
    let data={
      "reciepename":this.reciepename,
      "description":this.description,
      "flavour":this.flavour,
      "color":this.color
    }
    console.log(data)
    this.myapi.addreciepe(data).subscribe(
      (data)=>{
    
        alert("data inserted successfully")
      }
    )
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../users';
import axios from 'axios';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})export class ProfileComponent implements OnInit {
  productDetails: any;

  constructor(private sd: SharedService) { }

  lis=[]

  ngOnInit() {
    // Retrieve the product details from the shared service
    this.productDetails = this.sd.getdata();
    axios.get("http://localhost:5000/data").then((res)=>{
      console.log(res.data)
      let l=res.data;
      
      for (let i =0; i<l.length;i++)
      {
        let v=l[i][0]
        console.log(v)
        axios.get(`http://localhost:3000/Users?Key=${v}`).then((res)=>{
        this.lis.push(res.data)
        })
      }
      console.log(this.lis)
    })

    
  }
}




// ...

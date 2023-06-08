// import { Component, OnInit } from '@angular/core';
// import { Users } from '../users'; 
// import { RestService } from '../rest.service';




// @Component({
//   selector: 'app-categorysearch',
//   templateUrl: './categorysearch.component.html',
//   styleUrls: ['./categorysearch.component.css']
// })
// export class CategorysearchComponent implements OnInit {

// // getUsers:undefined| Users[]
//  topUsers:undefined| Users[]
//  searchResult: undefined| Users[]

// constructor(private rs:RestService){

// }
// ngOnInit(): void {
//     // this.rs.getUsers().subscribe((response) =>{
//     //   // console.warn(response)
//     //    this.getUsers = response ;
//     // })

//     this.rs.topUsers().subscribe((data)=>{
//       this.topUsers=data;
//     })

// }

// searchProduct(query:KeyboardEvent){
//   if(query){
//     const element = query.target as HTMLInputElement;
//     // console.warn(element.value);
//     this.rs.searchProduct(element.value).subscribe((result)=>{
//       console.warn(result);
//       this.searchResult=result;
//     })
//   }
// }
// }

import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { RestService } from '../rest.service';
import { SharedDataService } from '../shared-data.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import axios from 'axios';

@Component({
  selector: 'app-categorysearch',
  templateUrl: './categorysearch.component.html',
  styleUrls: ['./categorysearch.component.css']
})
export class CategorysearchComponent implements OnInit {
  topUsers: Users[] = [];
  pagedTopUsers: Users[] = [];
  currentPage: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [1, 2, 5,10,15,20];


  constructor(private rs: RestService , private router: Router, private sd:SharedDataService) {}
// constructor(private data:SharedService,private rs: RestService){}
  ngOnInit(): void {
    // this.data.setdata("Hello3")
    this.rs.topUsers().subscribe((data) => {
      this.topUsers = data;
      this.updatePagedTopUsers();
    });
  }

  searchProduct(query: KeyboardEvent): void {
    if (query) {
      const element = query.target as HTMLInputElement;
      
      this.rs.searchProduct(element.value).subscribe((result) => {
        this.sd.setProductDetails(result)
        console.log(result);
        this.topUsers = result;
        this.updatePagedTopUsers();


      });

    }
    
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedTopUsers();
  }

  updatePagedTopUsers(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedTopUsers = this.topUsers.slice(startIndex, endIndex);
  }


  postData(a:any)
  {
    console.log("POST")
    axios.post("http://localhost:5000/data",{'list':[a]})
  }

  fetchProductDetails(key:Number): void {

    const stringKey = key.toString(); // Convert the key to a string
    this.rs.getProductDetails(stringKey).subscribe((details) => {
      console.log(details);
      this.sd.setProductDetails(details)
    });
  }
  // }
  // redir(): void {
  //   const query = this.queryValue;
  
  //   if (query) {
  //     this.router.navigateByUrl(`/search/${query}`);
  //     console.log(query)
  //   }
  // }

 
}

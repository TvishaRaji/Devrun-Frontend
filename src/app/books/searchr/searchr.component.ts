// import { Component, OnInit, Input } from '@angular/core';
// import { BookDetail } from '../book.model';
// import { SearchbComponent } from '../searchb/searchb.component';

// @Component({
//   selector: 'app-searchr',
//   templateUrl: './searchr.component.html',
//   styleUrls: ['./searchr.component.css']
// })
// export class SearchrComponent {

//   @Input()
//   result!: BookDetail;

//   constructor() { }

//   ngOnInit() {
//   }

//   results!: BookDetail[];
//   loading!: boolean;
//   message = '';

//   updateResults(results: BookDetail[]): void {
//     this.results = results;
//     if (this.results.length === 0) {
//       this.message = 'Not found...';
//     } else {
//       this.message = 'Top 10 results:';
//     }
//   }

  

// }

import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookDetail } from '../book.model';

@Component({
  selector: 'app-searchr',
  templateUrl: './searchr.component.html',
  styleUrls: ['./searchr.component.css']
})
export class SearchrComponent implements OnInit {
  @Input()
  result!: BookDetail;
 

  bookDetails: any;
  loading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (this.result && this.result.id) {
      this.getBookDetails(this.result.id);
    }
  }

  

  getBookDetails(bookId: string): void {
    this.loading = true;
    const apiUrl = `https://www.googleapis.com/books/v1/volumes/${bookId}`;
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        this.bookDetails = response;
        this.loading = false;
      },
      (error: any) => {
        console.error(error);
        this.loading = false;
      }
    );
  }
}

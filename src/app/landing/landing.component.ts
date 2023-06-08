// import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
// import { fromEvent } from 'rxjs';
// import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';
// import { ApiService } from 'src/app/api.service';
// import { BookDetail } from '../books/book.model';

// @Component({
//   selector: 'app-landing',
//   templateUrl: './landing.component.html',
//   styleUrls: ['./landing.component.css']
// })
// export class LandingComponent {

  
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

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { BookDetail } from '../books/book.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  results: BookDetail[] = [];
  loading = false;
  message = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {}


    updateResults(results: BookDetail[]): void {
      this.results = results;
      if (this.results.length === 0) {
        this.message = 'Not found...';
      } else {
        this.message = 'Top 10 results:';
      }
    }

  searchBooks(query: string): void {
    this.loading = true;
    this.apiService.search(query).subscribe(
      (results: BookDetail[]) => {
        this.results = results;
        if (this.results.length === 0) {
          this.message = 'Not found...';
        } else {
          this.message = 'Top 10 results:';
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error:', error);
        this.loading = false;
      }
    );
  }
}




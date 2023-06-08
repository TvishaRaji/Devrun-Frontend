import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Users } from '../users';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent {

  topUsers: Users[] = [];
  pagedTopUsers: Users[] = [];
  currentPage: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [1, 2, 5,10,15,20];

  constructor(private rs: RestService , private router: Router) {}

  ngOnInit(): void {
    this.rs.topUsers().subscribe((data) => {
      this.topUsers = data;
      this.updatePagedTopUsers();
    });
  }

  searchProduct(query: KeyboardEvent): void {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.rs.searchProduct(element.value).subscribe((result) => {
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

  submitSearch(val:string){
    console.warn(val)
    this.router.navigate([`search/${val}`])
  }

}

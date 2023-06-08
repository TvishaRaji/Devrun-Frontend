import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private str:string="default"
  constructor() { }
  getdata()
  {
    console.log(this.str)
    return this.str
  }

  setdata(str:string){
    console.log("SET",str)
    this.str=str
  }
}

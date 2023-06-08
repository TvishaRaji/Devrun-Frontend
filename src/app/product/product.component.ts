import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import { user } from '@angular/fire/auth';
import { Users } from '../users';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  getBookData : Users[] = []
constructor(private activeRoute: ActivatedRoute, private rs:RestService){}
ngOnInit():void{
  let productId = this.activeRoute.snapshot.paramMap.get('productId')
  console.warn(productId);
  productId && this.rs.getProduct(productId).subscribe((result) =>{
    console.warn(result)
    this.getBookData = result;
  })
}
}

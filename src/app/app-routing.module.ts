import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { L1Component } from './l1/l1.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { SearchrComponent } from './books/searchr/searchr.component';
import { CategorysearchComponent } from './categorysearch/categorysearch.component';
import { ProfileComponent } from './profile/profile.component';
import { QueryComponent } from './query/query.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"",
    component:L1Component
  },
  {
    path:"l1",
    component:L1Component
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"landing",
    component:LandingComponent
  },
  {
    path:"searchr",
    component:SearchrComponent
  },
  {
    path:"category",
    component:CategorysearchComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"search/:query",
    component:QueryComponent
  },
  {
    path:"product/:productId",
    component:ProductComponent
  }
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

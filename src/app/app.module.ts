import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { L1Component } from './l1/l1.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchbComponent } from './books/searchb/searchb.component';
import { SearchrComponent } from './books/searchr/searchr.component';
import { HomeComponent } from './home/home.component';
import { CategorysearchComponent } from './categorysearch/categorysearch.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProfileComponent } from './profile/profile.component';
import { QueryComponent } from './query/query.component';
import { ProductComponent } from './product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    L1Component,
    SignupComponent,
    LoginComponent,
    LandingComponent,
    SearchbComponent,
    SearchrComponent,
    HomeComponent,
    CategorysearchComponent,
    ProfileComponent,
    QueryComponent,
    ProductComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }

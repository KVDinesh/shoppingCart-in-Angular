import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from "./home/product.service";
import { HttpModule } from "@angular/http/";
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'signup',component:SignupComponent},
      {path:'home',component:HomeComponent},
      {path:'cart',component:CartComponent}
    ])  
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

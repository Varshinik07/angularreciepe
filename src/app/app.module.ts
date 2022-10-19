import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddreciepeComponent } from './addreciepe/addreciepe.component';
import { ViewreciepeComponent } from './viewreciepe/viewreciepe.component';
import{HttpClientModule} from '@angular/common/http';
const appRoutes:Routes=[
  {
    path:"",component:AddreciepeComponent
  },
  {
    path:"viewreciepe",component:ViewreciepeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddreciepeComponent,
    ViewreciepeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

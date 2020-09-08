import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddResturantComponent } from './add-resturant/add-resturant.component';
import { UpdateResturantComponent } from './update-resturant/update-resturant.component';
import { ListResturantComponent } from './list-resturant/list-resturant.component';
import { LoginResturantComponent } from './login-resturant/login-resturant.component';
import { RegisterResturantComponent } from './register-resturant/register-resturant.component';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DeleteResturantComponent } from './delete-resturant/delete-resturant.component';

@NgModule({
  declarations: [
    AppComponent,
    AddResturantComponent,
    UpdateResturantComponent,
    ListResturantComponent,
    LoginResturantComponent,
    RegisterResturantComponent,
    HomeComponent,
    DeleteResturantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddResturantComponent } from './add-resturant/add-resturant.component';
import { UpdateResturantComponent } from './update-resturant/update-resturant.component';
import { ListResturantComponent } from './list-resturant/list-resturant.component';
import { LoginResturantComponent } from './login-resturant/login-resturant.component';
import { RegisterResturantComponent } from './register-resturant/register-resturant.component';
import { HomeComponent } from './home/home.component';
import { DeleteResturantComponent } from './delete-resturant/delete-resturant.component';


const routes: Routes = [
  
  {component : HomeComponent, path :"" },
  {component : AddResturantComponent, path :"add" },
  {component : UpdateResturantComponent, path :"update/:id" },
  {component : ListResturantComponent, path :"list" },
  {component : LoginResturantComponent, path :"login" },
  {component : RegisterResturantComponent, path :"register" },
  {component : DeleteResturantComponent, path :"delete/:id" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

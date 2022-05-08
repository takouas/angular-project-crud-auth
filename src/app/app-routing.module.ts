import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'book/:id', component: DetailsComponent },
  { path: 'home', component: HomeComponent,children: [

  { path: 'add', component: CreateComponent },
  { path: 'books', component: ListComponent }] },
  { path: '404', component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

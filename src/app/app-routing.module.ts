import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TodoComponent} from "./components/todo/todo.component";

const routes: Routes = [
  // Các route khác ở đây
  { path: 'home', component: HomeComponent },
  { path: 'todo', component: TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

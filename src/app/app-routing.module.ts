import {NewFormComponent} from './new-form/new-form.component';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component:ListComponent},
  {path: 'new', component:NewFormComponent},
  {path: 'edit/:id', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

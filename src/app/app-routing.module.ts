import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentFormComponent } from './student-form/student-form.component';


const routes: Routes = [
  {path:'',component:StudentFormComponent},
  {path:'studentForm',component:StudentFormComponent},
  {path:'studentDetails',component:StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

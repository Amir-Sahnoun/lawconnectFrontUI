import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeesComponent } from 'C:/Users/pc/Desktop/aalaPI/personalapp/aalaapp/src/app/AALA/modules/hr/employees/add-employees/add-employees.component';
const routes: Routes = [
  
  { path: '', component: AddEmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }

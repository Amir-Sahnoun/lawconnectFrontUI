import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HrComponent } from './hr.component';
import { EmployeeService } from 'C:/Users/pc/Desktop/aalaPI/personalapp/aalaapp/src/app/AALA/service/employee.service';
import { DepartmentService } from 'C:/Users/pc/Desktop/aalaPI/personalapp/aalaapp/src/app/AALA/service/department.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { HrRoutingModule } from './hr-routing.module';

import { AddEmployeesComponent } from 'C:/Users/pc/Desktop/aalaPI/personalapp/aalaapp/src/app/AALA/modules/hr/employees/add-employees/add-employees.component';
import { PresenceComponent } from './presence/presence.component';

@NgModule({
  declarations: [
    //AddEmployeesComponent,
    HrComponent,
    //PresenceComponent
    
    
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    HrRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ], 
  providers: [ EmployeeService, DepartmentService ]

  
})
export class HrModule { }

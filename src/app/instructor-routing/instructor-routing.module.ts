import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {StudentDashboardComponent } from '../student-dashboard/student-dashboard.component';
import { Routes } from '@angular/router';

const routes: Routes =[
  {path:'student',
  component: StudentDashboardComponent}
  
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class InstructorRoutingModule { }


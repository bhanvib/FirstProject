import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UpdateComponent } from './update/update.component';
import { StudentupdateComponent } from './studentupdate/studentupdate.component';
import { StudentUpdateDetailsComponent } from './student-update-details/student-update-details.component';



@NgModule({
  declarations: [StudentDashboardComponent, StudentDetailsComponent, UpdateComponent, StudentupdateComponent, StudentUpdateDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }

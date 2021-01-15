import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { UpdateComponent } from './instructor-update-details/update.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { IntructorUpdateDetailsComponent } from './intructor-update-details/intructor-update-details.component';
import { InstructorUpdateDetailsComponent } from './instructor-update-details/instructor-update-details.component';




@NgModule({
  declarations: [
    
  InstructorDetailsComponent,
    
  UpdateComponent,
    
  InstructorDashboardComponent,
    
  IntructorUpdateDetailsComponent,
    
  InstructorUpdateDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class InstructorModule { }

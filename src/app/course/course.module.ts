import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseContentListComponent } from './course-content-list/course-content-list.component';



@NgModule({
  declarations: [CourseDetailsComponent, CourseDashboardComponent, CourseListComponent, CourseContentListComponent],
  imports: [
    CommonModule
  ]
})
export class CourseModule { }

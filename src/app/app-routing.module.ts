import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {InstructorDashboardComponent} from './instructor/instructor-dashboard/instructor-dashboard.component';
import {InstructorDetailsComponent} from './instructor/instructor-details/instructor-details.component'
import {InstructorUpdateDetailsComponent} from './instructor/instructor-update-details/instructor-update-details.component'
import {SignupComponent} from './signup/signup.component';
import {StudentDashboardComponent} from './student/student-dashboard/student-dashboard.component';
import {StudentUpdateDetailsComponent} from './student/student-update-details/student-update-details.component';

import {CourseDetailsComponent} from './course/course-details/course-details.component';
import {CourseContentListComponent} from './course/course-content-list/course-content-list.component';
import {CourseDashboardComponent} from './course/course-dashboard/course-dashboard.component';
import {CourseListComponent} from './course/course-list/course-list.component';
const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'instructor-dashboard',
    component: InstructorDashboardComponent
  },
  {
    path:'instructor-details',
    component: InstructorDetailsComponent
  },
  {
    path:'instructor-update-details',
    component: InstructorUpdateDetailsComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'student-dashboard',
    component: StudentDashboardComponent
  },
  {
    path:'student-update-details',
    component: StudentUpdateDetailsComponent
  },
  {
    path:'course-list',
    component: CourseListComponent
  },
  {
    path:'course-dashboard',
    component: CourseDashboardComponent
  },
  {
    path:'course-content-list',
    component: CourseContentListComponent
  },
  {
    path:'course-details',
    component: CourseDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

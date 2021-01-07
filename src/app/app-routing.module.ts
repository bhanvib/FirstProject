import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {InstructorDashboardComponent} from './instructor-dashboard/instructor-dashboard.component';
import {InstructorDetailsComponent} from './instructor-details/instructor-details.component';
import {InstructorUpdatedetailsComponent} from './instructor-updatedetails/instructor-updatedetails.component';
import {SignupComponent} from './signup/signup.component';
import {StudentDashboardComponent} from './student-dashboard/student-dashboard.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {UpdateDetailsComponent} from './update-details/update-details.component';

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
    path:'instructor-updatedetails',
    component: InstructorUpdatedetailsComponent
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
    path:'student-details',
    component: StudentDetailsComponent
  },
  {
    path:'update-details',
    component: UpdateDetailsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

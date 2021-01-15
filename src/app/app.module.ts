import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentUpdateDetailsComponent } from './student/student-update-details/student-update-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InstructorDashboardComponent } from './instructor/instructor-dashboard/instructor-dashboard.component';
import {InstructorDetailsComponent} from './instructor/instructor-details/instructor-details.component'
import {InstructorUpdateDetailsComponent} from './instructor/instructor-update-details/instructor-update-details.component';
import {CourseDetailsComponent} from './course/course-details/course-details.component';
import {CourseContentListComponent} from './course/course-content-list/course-content-list.component';
import {CourseDashboardComponent} from './course/course-dashboard/course-dashboard.component';
import {CourseListComponent} from './course/course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    StudentDetailsComponent,
    StudentUpdateDetailsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    InstructorDashboardComponent,
    InstructorDetailsComponent,
    InstructorUpdateDetailsComponent,
    CourseDetailsComponent,
    CourseContentListComponent,
    CourseDashboardComponent,
    CourseListComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

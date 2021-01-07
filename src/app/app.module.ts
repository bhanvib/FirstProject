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
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { InstructorUpdatedetailsComponent } from './instructor-updatedetails/instructor-updatedetails.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    StudentDetailsComponent,
    UpdateDetailsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    InstructorDashboardComponent,
    InstructorDetailsComponent,
    InstructorUpdatedetailsComponent
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

import { Component} from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.component.html',
  styleUrls: ['./instructor-dashboard.component.css']
})
export class InstructorDashboardComponent  {

  constructor(private router:Router) { }

 gotopage(pageName:string):void {
   this.router.navigate(['$(pageName)']);
  }

}

import {
  Component,
  OnInit,
  Input,
  ViewChild
} from '@angular/core';
import {
  DataService
} from '../services/data.service';
import {
  ModalDirective
} from 'ng2-bootstrap/modal';

@Component({
  selector: 'course-list',
  templateUrl: 'course-list.component.html',
  styleUrls: ['course-list.component.css'],
  providers: [DataService],
})
export class CourseListComponent implements OnInit {

  public timeLineList: any[]
  public SchoolData: any = {
    "Courses": [],
    "Students": []
  };

  constructor(private dataService: DataService) {

  }

  getCourseName(courseID): String
{ 
   let courseName:string = "Till not enrolled in any course!";
       for (let i = 0; i < this.SchoolData.Courses.length; i++) {
            if (this.SchoolData.Courses[i].CourseID == courseID)
            {
                  courseName = this.SchoolData.Courses[i].Name ;
                  break;
            }
    }
  return courseName
}

 getData() {

    this.dataService.getSchoolData()
      .then((School_data: any) => {
        debugger
        this.SchoolData = School_data;
      });

  }


  ngOnInit() {

    this.getData();

  }


}

import {
  Component,
  OnInit, ViewChild
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';
import {
  DataService
} from '../services/data.service';
@Component({
  selector: 'student',
  templateUrl: 'student.component.html',
  styleUrls: ['student.component.css'],
  providers: [DataService]
})
export class StudentComponent implements OnInit {

  public seachText: string = "";
  public isShowSearchDD: boolean = false;
  public SchoolData: any = {
    "Courses": [],
    "Students": []
  };
  public updateStudent: any = {
      "$id": "",
      "StudentID": 0,
      "Year": "",
      "Name": "",
      "CourseID": -1,
      "Grade": ""
    }

@ViewChild('scModal') public scModal:ModalDirective;

constructor(private dataService: DataService) {}
  
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

replaceCourse(CourseID)
{
    for (let i = 0; i < this.SchoolData.Students.length; i++) {
            if (this.SchoolData.Students[i].StudentID == this.updateStudent.StudentID)
            {
                  this.SchoolData.Students[i].CourseID = CourseID ;
                  this.scModal.hide();
                  break;
            }
    }
}

updateCourse(student)
{  
     //debugger; 
     this.updateStudent = student;
    this.scModal.show();
}
  removeCourse(studentID) {
    for (let i = 0; i < this.SchoolData.Students.length; i++) {
            if (this.SchoolData.Students[i].StudentID == studentID)
            {
                  this.SchoolData.Students[i].CourseID = -1 ;
                  break;
            }
    }
  }

  getData() {

    this.dataService.getSchoolData()
      .then((School_data: any) => {
        //  debugger
        this.SchoolData = School_data;
      });

  }


  ngOnInit() {

    this.getData();

  }

}

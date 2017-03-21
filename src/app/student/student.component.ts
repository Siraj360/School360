import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  ModalDirective
} from 'ng2-bootstrap/modal';
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
  public isNewStudent: boolean = false;
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

  public grades = ['A++', 'A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D'];

  @ViewChild('scModal') public scModal: ModalDirective;
  @ViewChild('editModal') public editModal: ModalDirective;


  constructor(private dataService: DataService) {}

  saveChanges() {
    //Simple way to add/update
    if (this.isNewStudent) 
    {
      debugger
      // here id takeng as random
      this.updateStudent.StudentID = Math.floor((Math.random() * 100000) + 1);
      this.SchoolData.Students.unshift(this.updateStudent); // adding at 1st so easily visible
    } else 
    {
      for (let i = 0; i < this.SchoolData.Students.length; i++) {
        if (this.SchoolData.Students[i].StudentID == this.updateStudent.StudentID) {
          this.SchoolData.Students[i] = this.updateStudent;
          break;
       }
      }
      
    }
    this.editModal.hide();
  }

  editStudent(student ? : any) {
    if (student) {
      this.updateStudent = Object.assign({}, student);
      this.isNewStudent = false;
    } else {
      this.updateStudent = {
        "$id": "",
        "StudentID": 0,
        "Year": "",
        "Name": "",
        "CourseID": -1,
        "Grade": ""
      }
      this.isNewStudent = true;
    }

    this.editModal.show();
  }

  getCourseName(courseID): String {
    let courseName: string = "Till not enrolled in any course!";
    for (let i = 0; i < this.SchoolData.Courses.length; i++) {
      if (this.SchoolData.Courses[i].CourseID == courseID) {
        courseName = this.SchoolData.Courses[i].Name;
        break;
      }
    }
    return courseName
  }

  replaceCourse(CourseID) {
    for (let i = 0; i < this.SchoolData.Students.length; i++) {
      if (this.SchoolData.Students[i].StudentID == this.updateStudent.StudentID) {
        this.SchoolData.Students[i].CourseID = CourseID;
        this.scModal.hide();
        break;
      }
    }
  }

  updateCourse(student) {
    //debugger; 
    this.updateStudent = student;
    this.scModal.show();
  }
  removeCourse(studentID) {
    for (let i = 0; i < this.SchoolData.Students.length; i++) {
      if (this.SchoolData.Students[i].StudentID == studentID) {
        this.SchoolData.Students[i].CourseID = -1;
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

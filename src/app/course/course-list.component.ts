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

  public isNewCourse: boolean = false;
  public SchoolData: any = {
    "Courses": [],
    "Students": []
  };
  public updateCourse: any = {
    "$id": "",
    "CourseID": 0,
    "Name": "",
    "Code": "",
    "Description": ""
  }
  @ViewChild('editModal') public editModal: ModalDirective;
  constructor(private dataService: DataService) {

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

  saveChanges() {
    //Simple way to add/update
    if (this.isNewCourse) {
      debugger
      // here id takeng as random
      this.updateCourse.CourseID = Math.floor((Math.random() * 99999) + 1);
      this.SchoolData.Courses.unshift(this.updateCourse); // adding at 1st so easily visible
    } 
    else {
      for (let i = 0; i < this.SchoolData.Courses.length; i++) 
      {
        if (this.SchoolData.Courses[i].CourseID == this.updateCourse.CourseID) 
        {
           this.SchoolData.Courses[i] = this.updateCourse;
           break;
        }
      }
      
    }
    this.editModal.hide();
  }

  editCourse(course ? : any) {
    if (course) {
      this.updateCourse = Object.assign({}, course);
      this.isNewCourse = false;
    } else {
      this.updateCourse = {
        "$id": "",
        "CourseID": 0,
        "Name": "",
        "Code": "",
        "Description": ""
      }
      this.isNewCourse = true;
    }

    this.editModal.show();
  }



  getData() {

    this.dataService.getSchoolData()
      .then((School_data: any) => {
        this.SchoolData = School_data;
      });

  }


  ngOnInit() {

    this.getData();

  }


}

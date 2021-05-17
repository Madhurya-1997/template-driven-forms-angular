import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udemy-course-form',
  templateUrl: './udemy-course-form.component.html',
  styleUrls: ['./udemy-course-form.component.css']
})
export class UdemyCourseFormComponent implements OnInit {
  categories = [
    {
      id: 1,
      name: "Development"
    },
    {
      id: 2,
      name: "Languages"
    },
    {
      id: 3,
      name: "Arts"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  createCourse(x) {
    console.log(x)
  }

}

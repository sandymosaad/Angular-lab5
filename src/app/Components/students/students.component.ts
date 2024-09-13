

import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../Services/students.service';
import { RouterModule } from '@angular/router';
import { StudentComponent } from '../student/student.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-students',
  standalone: true,
  imports: [RouterModule, StudentComponent, CommonModule],
  providers: [StudentsService],
  templateUrl: './students.component.html',
  styles: ``
})
export class StudentsComponent implements OnInit {
  students:any;

constructor(public stuSer:StudentsService){}
ngOnInit(): void {
this.stuSer.GetAllStudents().subscribe({
  next: (data) =>{this.students=data},
  error: (err) =>{this.students=err}
});

};
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../Services/students.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  providers:[StudentsService],

  templateUrl: './details.component.html',
  styles: ``
})
export class DetailsComponent implements OnInit {
  ID=0;
  student:any;
 constructor(myRoute:ActivatedRoute,private stuSer: StudentsService){
  this.ID = myRoute.snapshot.params['id'];
}
 ngOnInit(): void {
 this.stuSer.GetStudentById(this.ID).subscribe({
   next: (data) =>{this.student=data},
   error: (err) =>{this.student=err}
  //  next: (data) =>{console.log (data)},
  //  error: (err) =>{console.log (err)}
  });
};












}

import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StudentsService } from '../../Services/students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './student.component.html',
  styles: ``
})


export class StudentComponent {
  @Input() student: any;
}

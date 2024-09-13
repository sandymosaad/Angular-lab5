import { Routes } from '@angular/router';
import { StudentsComponent } from './Components/students/students.component';
import { DetailsComponent } from './Components/details/details.component';
import { ErrorComponent } from './Components/error/error.component';


export const routes: Routes = [
    {path:"",component:StudentsComponent},
    {path:"students",component:StudentsComponent},
    {path:"students/:id",component:DetailsComponent},
    {path:"**",component:ErrorComponent}
];

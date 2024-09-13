import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private readonly http:HttpClient) {

   }

   private readonly  DB_URL= "https://freetestapi.com/api/v1/students"

  GetAllStudents(){
    return this.http.get(this.DB_URL);
  }

  GetStudentById(id:any){
    return this.http.get(this.DB_URL + "/" +id);
  }
}


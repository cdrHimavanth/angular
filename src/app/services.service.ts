import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customer } from './objects';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
  getData(){
    return [
      {
        name:"1",
        age:2,
        gender:"fe"
    },
  {
    name:"2",
        age:23,
        gender:"ma"
  }
  ,
  {
    name:"23",
        age:234,
        gender:"mas"
  }
  ,
  {
    name:"21",
        age:232,
        gender:"ma7"
  }]
  }
  getUsers():Observable<customer[]>{
    return this.http.get<customer[]>("http://localhost:8080/customer/all");
  }
}

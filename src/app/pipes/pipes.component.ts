import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public people:any = [];
  public name = "xYzzzzzzz";
  constructor(private _servicesService:ServicesService) { }
  public person={
    "name":"name1",
    "age":10,
    "gender":"carriage bag"
  }
  public date = new Date();

  ngOnInit(): void {
    this._servicesService.getUsers().subscribe(data=>console.log(data));
  }

}

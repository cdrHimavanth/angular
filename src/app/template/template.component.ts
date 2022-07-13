import { Component, OnInit } from '@angular/core';
import { Address, User } from '../objects';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  public  topics = ["Angular","React","Vue"];
  public address:Address=new Address("","");
  public userModel:User= new User("","",0,"","",false,this.address);
  onSubmit(user:User){
    this.userModel=user;
    console.log(user);
  }

  constructor() {
   }

  ngOnInit(): void {
  }

}

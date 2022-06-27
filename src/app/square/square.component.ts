import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit{
  constructor(){}
  ngOnInit() {
      
  }
  public greetings="";
  public name :string="";
  public myId="testId";
  public isDisabled=false;
  public textColor="success";
  public error=false;
  public clicks= false;
  public count:number =0;
  public classes = {
    "success":!this.isDisabled,
    "marg":true
  }
  onClick(event:any){
    this.clicks=!this.clicks;
    this.count++;
  }
  logger(value:string){
    this.greetings=value;
  }
}

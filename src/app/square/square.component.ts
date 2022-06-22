import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  public name="him";
  public myId="testId";
  public isDisabled=false;
  public textColor="success";
  public error=true;
  public classes = {
    "success":!this.isDisabled,
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square2',
  templateUrl: './square2.component.html',
  styleUrls: ['./square2.component.css']
})
export class Square2Component implements OnInit {
  public color="red";
  public colors=["red","blue","green","yellow"]

  constructor() { }

  ngOnInit(): void {
  }

}

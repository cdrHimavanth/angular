import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('parentData') public name : any;
  constructor() { }
  @Output() public childEvent = new EventEmitter();
  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('hey codevolution');
  }
}

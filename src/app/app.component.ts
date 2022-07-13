import { Component } from '@angular/core';
import { User } from './objects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name ="me";
  public message: any;
  title = 'angular-trail';
}

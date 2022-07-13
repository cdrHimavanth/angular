import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { passwordValidator } from '../shared/password-validator';
import { forbiddenNameValidator } from '../shared/user-name.validator';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  // registrationForm = new FormGroup({
  //   userName:new FormControl('Aaaa'),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //     city:new FormControl('Aaaa'),
  //   state:new FormControl(''),
  //   postalCode:new FormControl('')
  //   })
  // });
  registrationForm = this.fb.group({
    userName:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/Admin/)]],
    password:[''],
    confirmPassword:[''],
    address:this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    })
  },{validator:passwordValidator});
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  loadApi(){
    this.registrationForm.setValue({
      userName:"Hima",
      password:"asd",
      confirmPassword:"asd",
      address:{
        city:"city",
        state:"state",
        postalCode:"code"
      }
    });
  }
  patchApi(){
    this.registrationForm.patchValue({
      userName:"Hima2",
      password:"asd2",
      confirmPassword:"asd2",
      theppa:"kraaaaaa"//in patch we can also use only necessary
    });
  }

}

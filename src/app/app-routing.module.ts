import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuperComponent } from './duper/duper.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SquareComponent } from './square/square.component';
import { Square2Component } from './square2/square2.component';
import { SuperComponent } from './super/super.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/super',pathMatch:'full'
  },
  {
    path: 'square',component:SquareComponent
  },{
    path: 'square2',component:Square2Component
  }
  ,{
    path: 'super',component:SuperComponent
  }
  ,{
    path: 'super/duper',component:DuperComponent
  },
  {
    path :"**",component:NotfoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

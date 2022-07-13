import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { Square2Component } from './square2/square2.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesService } from './services.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponent } from './reactive/reactive.component';
import { RoutingComponent } from './routing/routing.component';
import { SuperComponent } from './super/super.component';
import { DuperComponent } from './duper/duper.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    Square2Component,
    ChildComponent,
    PipesComponent,
    ReactiveComponent,
    RoutingComponent,
    SuperComponent,
    DuperComponent,
    NotfoundComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

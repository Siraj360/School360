import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouteModule }  from './app.route.module';
import {FilterPipe} from './pipes'


import {MenuComponent} from './common/menu';
import {ContactComponent} from "./common/contact/";
import {HomeComponent} from "./home"
import {HomeHeaderComponent} from './home/home-header';
import {StudentComponent} from "./student";
import {CourseListComponent} from "./course";

import {ModalModule} from 'ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    MenuComponent,
    ContactComponent,
    HomeComponent,
    HomeHeaderComponent,
    StudentComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouteModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

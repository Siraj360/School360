import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }  from './home';
import {StudentComponent} from "./student";
import {CourseListComponent} from "./course";

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'student', component: StudentComponent },
    { path: 'course', component: CourseListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
 
  ]
})
export class AppRouteModule {}
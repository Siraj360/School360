import {Component, OnInit, ViewContainerRef} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Angular 2.3';
    viewContainerRef: ViewContainerRef;
    public constructor(viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
    }
    

    ngOnInit()
    {

    }
 }

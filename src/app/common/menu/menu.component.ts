import {  Component,
  OnInit,
  OnDestroy,
  trigger,
  state,
  style,
  transition, 
  animate } from '@angular/core';


@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
 animations: [

    trigger('contactMenuTrigger', [
        state('in', style({opacity: 1, transform: 'translateY(0)'})),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateY(-100%)'
      }),
      animate('0.1s ease-in')
    ]),
    transition('* => void', [
      animate('0.2s 10 ease-out', style({
        opacity: 0,
        transform: 'translateY(-100%)'
      }))
    ])
   ])

  ]

})

export class MenuComponent implements OnInit {
   
  public isShowContact: boolean= false;
  public isShowMenu: boolean= false;
  public isShowMegaMenu: boolean= false;



  public contactMenuState: string = 'collapsed';

  constructor() {}


  openContactMenu(isMenuOpen) {
   // debugger;
    this.contactMenuState =  (this.contactMenuState == 'collapsed') ? 'expanded' : 'collapsed';
    this.isShowContact = isMenuOpen;

  }



  ngOnInit() {
  }
  
  onContactClose()
{
    this.isShowContact = false;
    this.contactMenuState = 'collapsed';
}

onMegaMenuOpen()
{
   this.isShowContact = false;
    this.contactMenuState = 'collapsed';
}


}
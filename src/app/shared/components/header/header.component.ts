import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('showMobile') showMenu: ElementRef<any>;
  checkLive: boolean;

  constructor() {
    this.checkLive = false;
  }

  ngOnInit() {
  }

  checkMobile() {
    this.checkLive = !this.checkLive;
    if (!this.checkLive) {
      this.showMenu.nativeElement.classList.add('nav-list-mobile');
    } else {
      this.showMenu.nativeElement.classList.remove('nav-list-mobile');
    }
  }

}

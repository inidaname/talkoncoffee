import { Component, OnInit, Input } from '@angular/core';
import { socialLinks } from '../../interface/episodes';
import { Socials } from '../../class/socials';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {

  @Input() location: any;

  socials: socialLinks[];

  constructor() {
    this.socials = Socials;
  }

  ngOnInit() {
  }

}

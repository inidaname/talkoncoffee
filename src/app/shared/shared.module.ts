import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from '@scullyio/ng-lib';

import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ComponentsModule
  ],
  exports: [
    HeaderComponent,
    CommonModule,
    FlexLayoutModule,
    FooterComponent,
    ComponentsModule
  ]
})
export class SharedModule { }

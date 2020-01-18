import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
  ],
  exports: [
    HeaderComponent,
    CommonModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }

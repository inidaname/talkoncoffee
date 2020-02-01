import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from '@scullyio/ng-lib';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerComponent } from './components/player/player.component';
import { TimeLineDirective } from './directives/time-line.directive';
import { EmptyComponent } from './components/empty/empty.component';
import { SocialsComponent } from './components/socials/socials.component';
import { UrlShorterPipe } from './pipes/url-shorter.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PlayerComponent,
    TimeLineDirective,
    EmptyComponent,
    SocialsComponent,
    UrlShorterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ComponentsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    CommonModule,
    FlexLayoutModule,
    FooterComponent,
    ComponentsModule,
    PlayerComponent,
    FontAwesomeModule,
    TimeLineDirective,
    SocialsComponent,
    UrlShorterPipe
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { BookReviewComponent } from './book-review/book-review.component';
import { TechTalkComponent } from './tech-talk/tech-talk.component';


@NgModule({
  declarations: [
    HomeComponent,
    EpisodesComponent,
    BookReviewComponent,
    TechTalkComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }

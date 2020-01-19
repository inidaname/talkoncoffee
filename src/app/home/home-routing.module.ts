import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { BookReviewComponent } from './book-review/book-review.component';
import { TechTalkComponent } from './tech-talk/tech-talk.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'episodes'
      },
      {
        path: 'episodes',
        component: EpisodesComponent
      },
      {
        path: 'book-review',
        component: BookReviewComponent
      },
      {
        path: 'tech-talk',
        component: TechTalkComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

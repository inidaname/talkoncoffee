import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { BookReviewComponent } from './book-review/book-review.component';
import { TechTalkComponent } from './tech-talk/tech-talk.component';
import { EmptyComponent } from '../shared/components/empty/empty.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'episodes',
        component: EpisodesComponent,
        children: [
          {
            path: ':id',
            component: EmptyComponent
          }
        ]
      },
      {
        path: 'bookreview',
        component: BookReviewComponent
      },
      {
        path: 'techtalk',
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

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Episodes } from 'src/app/shared/interface/episodes';
import { RssFeedApiService } from 'src/app/shared/service/rss-feed-api.service';

declare var ng: any;

@Component({
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.scss']
})
export class BookReviewComponent implements OnInit {

  episodes$: Observable<Episodes[]>;

  constructor(
    private rssfeed: RssFeedApiService
  ) { }

  ngOnInit() {
    this.episodes$ = this.rssfeed.getFeeds('bookreviews');
  }

}

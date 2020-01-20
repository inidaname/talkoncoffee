import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Episodes } from 'src/app/shared/interface/episodes';
import { RssFeedApiService } from 'src/app/shared/service/rss-feed-api.service';

@Component({
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.scss']
})
export class BookReviewComponent implements OnInit {

  episodes$: Observable<Episodes[]>;
  image = `https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/2421776/2421776-1579429638253-7eadae45881d4.jpg`;

  constructor(
    private rssfeed: RssFeedApiService
  ) { }

  ngOnInit() {
    this.episodes$ = this.rssfeed.getFeeds();
    this.episodes$.subscribe(e => console.log(e))
  }

}

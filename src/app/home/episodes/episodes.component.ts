import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Episodes, FeedReturn } from 'src/app/shared/interface/episodes';
import { RssFeedApiService } from 'src/app/shared/service/rss-feed-api.service';

@Component({
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodes$: Observable<Episodes[]>;

  constructor(
    private rssfeed: RssFeedApiService
  ) { }

  ngOnInit() {
    this.episodes$ = this.rssfeed.getFeeds('interviews');
  }

}

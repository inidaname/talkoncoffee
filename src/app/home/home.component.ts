import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { RssFeedApiService } from '../shared/service/rss-feed-api.service';
import { Episodes, Feed } from '../shared/interface/episodes';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links$: Observable<any> = this.scully.available$;
  trailer$: Observable<Episodes>;
  Podcast: Observable<Feed>;

  constructor(
    private scully: ScullyRoutesService,
    private feed: RssFeedApiService
  ) { }

  ngOnInit() {
    this.trailer$ = this.feed.getTrailer();
    this.Podcast = this.feed.getFeedDetails();
  }
}

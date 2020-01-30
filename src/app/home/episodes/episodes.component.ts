import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Episodes, FeedReturn } from 'src/app/shared/interface/episodes';
import { RssFeedApiService } from 'src/app/shared/service/rss-feed-api.service';
import { ShareDataService } from 'src/app/shared/service/share-data.service';

@Component({
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodes$: Observable<Episodes[]>;

  constructor(
    private rssfeed: RssFeedApiService,
    private shareEpisode: ShareDataService
  ) { }

  ngOnInit() {
    this.episodes$ = this.rssfeed.getFeeds('interviews');
  }

  sendEpisode(episode: Episodes) {
    if (episode) {
      this.shareEpisode.receiveEpisode(episode);
    }
  }

}

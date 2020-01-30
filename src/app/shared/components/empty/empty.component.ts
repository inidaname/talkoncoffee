import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RssFeedApiService } from '../../service/rss-feed-api.service';
import { ShareDataService } from '../../service/share-data.service';

@Component({
  template: ``,
  styles: ['']
})
export class EmptyComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private rssApi: RssFeedApiService,
    private shareEpisode: ShareDataService
  ) { }

  ngOnInit() {
    this.rssApi.getEpisode(this.route.snapshot.params.id).subscribe(e => {
      if (e) {
        this.shareEpisode.receiveEpisode(e);
      }
    });
  }

}

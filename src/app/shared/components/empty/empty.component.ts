import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { RssFeedApiService } from '../../service/rss-feed-api.service';
import { ShareDataService } from '../../service/share-data.service';

@Component({
  template: ``,
  styles: ['']
})
export class EmptyComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private rssApi: RssFeedApiService,
    private shareEpisode: ShareDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.rssApi.getEpisode(this.route.snapshot.params.id).subscribe(e => {
      if (e) {
        this.shareEpisode.receiveEpisode(e);
      }
    });
  }

  ngOnDestroy() {
    this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        if (e.url === '/' || e.url === '/blog') {
          this.shareEpisode.receiveEpisode(null);
        }
      }
    });
  }

}

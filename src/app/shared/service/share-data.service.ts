import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Episodes } from '../interface/episodes';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  public currentEpisode: Observable<Episodes>;
  private episodeSubject: BehaviorSubject<Episodes>;

  constructor() {
    this.episodeSubject = new BehaviorSubject<Episodes>(null);
    this.currentEpisode = this.episodeSubject.asObservable();
  }

  public receiveEpisode(episode: Episodes){
    this.episodeSubject.next(episode);
  }
}

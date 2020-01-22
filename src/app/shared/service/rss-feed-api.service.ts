import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {map, catchError, tap} from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Episodes, FeedReturn, Feed } from '../interface/episodes';

@Injectable({
  providedIn: 'root'
})
export class RssFeedApiService {

  api: string = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fanchor.fm%2Fs%2Ff07ecc0%2Fpodcast%2Frss';
  image = `https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/2421776/2421776-1579306931557-dd50aa7aa56f4.jpg`;

  constructor(
    private http: HttpClient
  ) { }

  getFeeds(type: string): Observable<Episodes[]> {
    return this.http
      .get<FeedReturn>(`${this.api}`)
      .pipe(
        map((data: FeedReturn) => {
          data.items.pop();
          if (type === 'interviews') {
            const episodes = data.items.filter((v: Episodes) => {
              if (this.image !== v.thumbnail) {
                return v;
              }
            });
            return episodes;
          }

          if (type === 'bookreviews') {
            const episodes = data.items.filter((v: Episodes) => {
              if (this.image === v.thumbnail) {
                return v;
              }
            });
            return episodes;
          }
        }),
        catchError(this.handleError)
      );
  }

  getTrailer(): Observable<Episodes> {
    return this.http
      .get<FeedReturn>(`${this.api}`)
      .pipe(
        map(data => {
          return data.items[data.items.length -1];
        }),
        catchError(this.handleError)
      );
  }

  getFeedDetails(): Observable<Feed> {
    return this.http
      .get<FeedReturn>(`${this.api}`)
      .pipe(
        map(data => {
          return data.feed;
        }),
        catchError(this.handleError)
      );
  }


  private handleError(err: HttpErrorResponse) {
    console.log(err);
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.error.message}`;
    }
    return throwError(err);
  }
}

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
  constructor(
    private http: HttpClient
  ) { }

  getFeeds(): Observable<Episodes[]> {
    return this.http
      .get<FeedReturn>(`${this.api}`)
      .pipe(
        map(data => {
          data.items.pop();
          return data.items;
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

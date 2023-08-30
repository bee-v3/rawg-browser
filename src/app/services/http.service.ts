import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../interfaces/game';
import { APIResponse } from '../interfaces/apiresponse';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { 
  }

  getGameList(ordering: string, search?: string): Observable<APIResponse<Game>> {
    this.http.head
    let params = new HttpParams().set('ordering', ordering);
    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }
    return this.http.get<APIResponse<Game>>(`${environment.BASE_URL}/games`, {params: params});
  }

  getGameDetails(id: string): Observable<Game> {
    const gameInfoRequest = this.http.get(`${environment.BASE_URL}/games/${id}`);
    const gameTrailersRequest = this.http.get(
      `${environment.BASE_URL}/games/${id}/movies`
    );
    const gameScreenshotsRequest = this.http.get(
      `${environment.BASE_URL}/games/${id}/screenshots`
    );

    return forkJoin({gameInfoRequest, gameScreenshotsRequest, gameTrailersRequest})
    .pipe(
      map((gamedetail: any) => {
        return {
          ...gamedetail['gameInfoRequest'],
          screenshots: gamedetail['gameScreenshotsRequest']?.results,
          trailers: gamedetail['gameTrailersRequest']?.results,
        };
      })
    );
  }
}

import { inject, Injectable } from '@angular/core';
import { Film } from './film';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RemoteDataService {
  private http = inject(HttpClient);

  getFilms():Promise<Film[]>{
    return lastValueFrom(this.http.get<Film[]>('https://docs.webix.com/samples/server/films'));
  }
}

import { Injectable } from '@angular/core';
import { Film } from "./film";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RemoteDataService {
  constructor(private http: HttpClient) { }

  getFilms():Promise<Film[]>{
    return this.http.get<Film[]>(`https://api.myjson.com/bins/12aesl`).toPromise();
  }

}
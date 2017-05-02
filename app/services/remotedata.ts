import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Film } from "../models/film"; 
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RemoteDataService {
  constructor (
    private http: Http
  ) {}

  getFilms():Promise<Film[]>{
    return this.http.get(`https://api.myjson.com/bins/12aesl`)
    	.toPromise()
    	.then((res:Response) => res.json());
  }

}
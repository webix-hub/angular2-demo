import { Component } from '@angular/core';
import { Film } from "../models/film"

@Component({
  selector: 'html-layout',
  template: `<h2>Initing Webix component in separate HTML containers</h2>
            <datatable (onRowSelect)="fillInfo($event)" class='pagebox'></datatable>
            <div *ngIf="selectedFilm">
              <h3> Selected Film </h3>
              <ul>
                <li> Title : {{selectedFilm.title}} </li>
                <li> Votes : {{selectedFilm.votes}} </li>
              </ul>
            </div>
            `
})
export class HTMLLayoutComponent {
  private selectedFilm: Film;
  fillInfo(film : Film){
    this.selectedFilm = film;
  }
}

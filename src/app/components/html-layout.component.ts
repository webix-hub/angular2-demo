import { Component } from '@angular/core';
import { Film } from '../services/film';
import { DataTableComponent } from './datatable.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'webix-html-layout',
    template: `<h2>Initing Webix component in separate HTML containers</h2>
            <webix-datatable (rowSelect)="fillInfo($event)" class='pagebox'></webix-datatable>
            <div *ngIf="selectedFilm">
              <h3> Selected Film </h3>
              <ul>
                <li> Title : {{selectedFilm.title}} </li>
                <li> Votes : {{selectedFilm.votes}} </li>
              </ul>
            </div>
            `,
    imports: [DataTableComponent, NgIf]
})
export class HTMLLayoutComponent {
  selectedFilm: Film | null = null;

  fillInfo(film : Film){
    this.selectedFilm = film;
  }
}

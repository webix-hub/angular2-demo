import { Component, viewChild } from '@angular/core';
import { DataTableComponent } from './datatable.component';
import { Film } from '../services/film';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'webix-form-toolbar',
    template: `
            <form class="formbox" *ngIf="selectedFilm">
              <input  [(ngModel)]="selectedFilm.title" placeholder="Title" name="title"/>
              <input  [(ngModel)]="selectedFilm.year" placeholder="Year" name="year"/>
              <button type="button" (click)="saveFilm()">Save</button>
            </form>
            <webix-datatable (rowSelect)="fillInfo($event)" class='pagebox'></webix-datatable>`,
    imports: [NgIf, FormsModule, DataTableComponent]
})
export class FormToolbarComponent {
  grid = viewChild.required<DataTableComponent>(DataTableComponent);
  selectedFilm: Film | null = null;

  fillInfo(film : Film){
    this.selectedFilm = film;
  }
  saveFilm(){
    if(this.selectedFilm) this.grid().updateFilm(this.selectedFilm);
  }
}
import { Component, ViewChild } from '@angular/core';
import { DataTableComponent } from "./datatable.component";
import { Film } from "../film";

@Component({
  selector: 'form-toolbar',
  template: `
            <form class="formbox" *ngIf="selectedFilm">
              <input  [(ngModel)]="selectedFilm.title" placeholder="Title" name="title"/>
              <input  [(ngModel)]="selectedFilm.category" placeholder="Category" name="category"/> 
              <button type="button" (click)="saveFilm()">Save</button>
            </form>
            <datatable (onRowSelect)="fillInfo($event)" class='pagebox'></datatable>`
})
export class FormToolbarComponent {
  @ViewChild(DataTableComponent) grid: DataTableComponent;
  private selectedFilm: Film;

  fillInfo(film : Film){
    this.selectedFilm = film;
  }

  saveFilm(){
    this.grid.updateFilm(this.selectedFilm);
  }
}
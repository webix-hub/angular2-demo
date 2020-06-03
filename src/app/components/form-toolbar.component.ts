import { Component, ViewChild } from '@angular/core';
import { DataTableComponent } from './datatable.component';
import { Film } from '../film';

@Component({
  selector: 'form-toolbar',
  template: `
    <form class="formbox" *ngIf="selectedFilm">
      <input [(ngModel)]="selectedFilm.title" placeholder="Title" name="title"/>
      <input [(ngModel)]="selectedFilm.category" placeholder="Category" name="category"/>
      <button type="button" (click)="saveFilm()">Save</button>
    </form>
    <datatable (rowSelected)="fillInfo($event)" class='pagebox'></datatable>`
})
export class FormToolbarComponent {
  @ViewChild(DataTableComponent, {static: false}) grid: DataTableComponent;
  public selectedFilm: Film;

  fillInfo(film: Film): void{
    this.selectedFilm = film;
  }

  saveFilm(): void{
    this.grid.updateFilm(this.selectedFilm);
  }
}

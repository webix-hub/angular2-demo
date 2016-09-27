import { Component, Input, ElementRef, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FilmService } from '../services/film';
import { Film } from '../models/film';

@Component({
  selector: 'datatable',
  template:"",
  providers: [FilmService]
})
export class DataTableComponent implements OnDestroy, OnInit {
  private ui : webix.ui.datatable;
  @Output() onRowSelect = new EventEmitter<Film>();

  constructor(private films: FilmService, root: ElementRef) {
        this.ui = <webix.ui.datatable> webix.ui({
            container: root.nativeElement,
            view:"datatable", autoConfig:true, data: this.films.getFilms(),
            on:{
              onAfterSelect: (id) => this.onRowSelect.emit(this.ui.getItem(id))
            }
        })
    }
    
    addRow(){
      this.ui.add({ title:"New row" });
    }
    updateFilm(film: Film){
      this.ui.updateItem(film.id, film);
    }
    ngOnInit(){
      this.ui.resize();
    }
    ngOnDestroy(){
      this.ui.destructor();
    }
}
import { Component, ElementRef, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../film';

@Component({
  selector: 'datatable',
  template:'',
  providers: [FilmService]
})
export class DataTableComponent implements OnDestroy, OnInit {
  @Output() rowSelected = new EventEmitter<Film>();
  private ui: webix.ui.datatable;

  constructor(private films: FilmService, root: ElementRef) {
        this.ui = webix.ui({
            container: root.nativeElement,
            view:'datatable', autoConfig:true, data: this.films.getFilms(),
            on:{
              onAfterSelect: (id): void => this.rowSelected.emit(this.ui.getItem(id))
            }
        }) as webix.ui.datatable
    }

    addRow(): void{
      this.ui.add({ title:'New row' });
    }
    updateFilm(film: Film): void{
      this.ui.updateItem(film.id, film);
    }
    ngOnInit(): void{
      this.ui.resize();
    }
    ngOnDestroy(): void{
      this.ui.destructor();
    }
}

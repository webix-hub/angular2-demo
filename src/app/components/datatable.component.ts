import { Component, ElementRef, OnDestroy, OnInit, output, inject } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../services/film';

@Component({
    selector: 'webix-datatable',
    template: '',
    providers: [FilmService]
})
export class DataTableComponent implements OnDestroy, OnInit {
  private ui: webix.ui.datatable;
  private root = inject(ElementRef);
  private films = inject(FilmService);
  readonly rowSelect = output<Film>();

  constructor(){
        this.ui = <webix.ui.datatable> webix.ui({
            container: this.root.nativeElement,
            view:'datatable',
            autoConfig:true,
            data: this.films.getFilms(),
            on:{
              onAfterSelect: (selection: any) => this.rowSelect.emit(this.ui.getItem(selection.id) as Film)
            }
        })
    }

    addRow(){
      this.ui.add({ title:'New row' });
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
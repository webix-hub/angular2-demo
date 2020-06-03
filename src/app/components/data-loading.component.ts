import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { RemoteDataService } from '../remote.service';


@Component({
  selector: 'data-loading',
  template: '',
  providers: [FilmService, RemoteDataService]
})

export class DataLoadingComponent implements OnDestroy, OnInit {
  private ui: webix.ui.baseview;

  constructor(private films: FilmService, private remote: RemoteDataService, root: ElementRef) {
    this.ui = webix.ui({
      container: root.nativeElement,
      type: 'wide',
      rows: [{
        type: 'header', template: 'Loading data with Angular HTTP',
      }, {
        view: 'datatable', autoConfig: true, autoheight: true, autowidth: true,
        data: remote.getFilms()
      }, {height: 50}, {
        type: 'header', template: 'Loading data with Webix',
      }, {
        view: 'datatable', autoConfig: true, autoheight: true, autowidth: true,
        url: 'https://api.jsonbin.io/b/5ea6df0b98b3d537523566e7'
      }]
    })
  }

  ngOnInit(): void {
    this.ui.resize();
  }

  ngOnDestroy(): void {
    this.ui.destructor();
  }
}

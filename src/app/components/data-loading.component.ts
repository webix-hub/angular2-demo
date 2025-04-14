import { Component, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';
import { RemoteDataService } from '../services/remote.service';

@Component({
    selector: 'webix-data-loading',
    template: '',
    providers: [RemoteDataService]
})
export class DataLoadingComponent implements OnDestroy, OnInit {
  private ui: webix.ui.baseview;
  private remote = inject(RemoteDataService);
  private root = inject(ElementRef);

  constructor(){
        this.ui = webix.ui({
            container: this.root.nativeElement,
            type:'wide',
            rows:[
              {
                type:'header', template:'Loading data with Angular HTTP',
              },
              {
                view:'datatable', autoConfig:true, autowidth:true, yCount:5,
                data: this.remote.getFilms()
              },
              { height: 50 },
              {
                type:'header', template:'Loading data with Webix',
              },
              {
                view:'datatable', autoConfig:true, autowidth:true, yCount:5,
                url: 'https://docs.webix.com/samples/server/films'
              }
            ]
        })
    }
    ngOnInit(){
      this.ui.resize();
    }
    ngOnDestroy(){
      this.ui.destructor();
    }
}

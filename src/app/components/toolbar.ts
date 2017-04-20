import { Component, Input, ElementRef, OnDestroy, OnInit, EventEmitter, Output } from '@angular/core';
import { FilmService } from '../services/film';

@Component({
  selector: 'toolbar',
  template:"",
  providers: [FilmService]
})
export class ToolbarComponent implements OnDestroy, OnInit {
  private ui : webix.ui.toolbar;
  @Output() onButton = new EventEmitter<string>();

  constructor(private films: FilmService, root: ElementRef) {
        this.ui = <webix.ui.toolbar> webix.ui({
            container: root.nativeElement,
            view:"toolbar", 
            elements:[
              { view:"button", value:"Add Row", width:150,  click: () => this.onButton.emit("add") }
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
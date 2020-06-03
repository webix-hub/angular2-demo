import { Component, ElementRef, OnDestroy, OnInit, EventEmitter, Output } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'toolbar',
  template:'',
  providers: [FilmService]
})
export class ToolbarComponent implements OnDestroy, OnInit {
  private ui: webix.ui.toolbar;
  @Output() button = new EventEmitter<string>();

  constructor(private films: FilmService, root: ElementRef) {
        this.ui = webix.ui({
            container: root.nativeElement,
            view:'toolbar',
            elements:[
              { view:'button', value:'Add Row', width:150,  click: (): void => this.button.emit('add') }
            ]
        }) as webix.ui.toolbar
    }

    ngOnInit(): void{
      this.ui.resize();
    }
    ngOnDestroy(): void{
      this.ui.destructor();
    }
}

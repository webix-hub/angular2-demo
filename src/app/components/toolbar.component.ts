import { Component, ElementRef, OnDestroy, OnInit, inject, output } from '@angular/core';

@Component({
    selector: 'webix-toolbar',
    template: ''
})
export class ToolbarComponent implements OnDestroy, OnInit {
  private ui: webix.ui.toolbar;
  private root = inject(ElementRef);
  readonly buttonClick = output<string>();

  constructor(){
        this.ui = <webix.ui.toolbar> webix.ui({
            container: this.root.nativeElement,
            view:'toolbar',
            elements:[
              { view:'button', value:'Add Row', width:150,  click: () => this.buttonClick.emit('add') }
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
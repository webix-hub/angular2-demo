import { Component, ViewChild } from '@angular/core';
import { ToolbarComponent } from "./toolbar.component";
import { DataTableComponent } from "./datatable.component";

@Component({
  selector: 'webix-layout',
  template: `<rows type="space" class="pagebox">
              <cell><toolbar (onButton)="buttonClick($event)">></toolbar></cell>
              <cell>
                <columns type="wide">
                  <cell width="300"><sidebar></sidebar></cell>
                  <cell><datatable></datatable></cell>
                </columns>
              </cell>
            </rows>
            `
})
export class WebixLayoutComponent {
  @ViewChild(DataTableComponent) grid: DataTableComponent;
  buttonClick(id: string){
    if (id === "add")
      this.grid.addRow();
  }
}

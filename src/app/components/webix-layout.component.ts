import { Component, ViewChild } from '@angular/core';
import { DataTableComponent } from './datatable.component';

@Component({
  selector: 'webix-layout',
  template: `
    <rows type="space" class="pagebox">
      <cell>
        <toolbar (button)="buttonClick($event)">></toolbar>
      </cell>
      <cell>
        <columns type="wide">
          <cell width="300">
            <sidebar></sidebar>
          </cell>
          <cell>
            <datatable></datatable>
          </cell>
        </columns>
      </cell>
    </rows>
  `
})
export class WebixLayoutComponent {
  @ViewChild(DataTableComponent, {static: false}) grid: DataTableComponent;
  buttonClick(id: string): void{
    if (id === 'add')
      this.grid.addRow();
  }
}

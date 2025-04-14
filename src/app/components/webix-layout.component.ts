import { Component, viewChild } from '@angular/core';
import { DataTableComponent } from './datatable.component';
import { RowsComponent, CellComponent, ColumnsComponent } from './layout.component';
import { ToolbarComponent } from './toolbar.component';
import { SideBarComponent } from './sidebar.component';

@Component({
    selector: 'webix-layout',
    template: `<webix-rows type="space" class="pagebox">
              <webix-cell><webix-toolbar (buttonClick)="handleButtonClick($event)"></webix-toolbar></webix-cell>
              <webix-cell>
                <webix-columns type="wide">
                  <webix-cell width="300"><webix-sidebar></webix-sidebar></webix-cell>
                  <webix-cell><webix-datatable></webix-datatable></webix-cell>
                </webix-columns>
              </webix-cell>
            </webix-rows>
            `,
    imports: [RowsComponent, CellComponent, ToolbarComponent, ColumnsComponent, SideBarComponent, DataTableComponent]
})
export class WebixLayoutComponent {
  grid = viewChild.required<DataTableComponent>(DataTableComponent);

  handleButtonClick(id: string){
    if (id === 'add')
      this.grid().addRow();
  }
}

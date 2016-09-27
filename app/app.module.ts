import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './components/app';
import { FormToolbarComponent }   from './components/form-toolbar';
import { HTMLLayoutComponent }   from './components/html-layout';
import { WebixLayoutComponent }   from './components/webix-layout';

import { routing, appRoutingProviders }  from './app.routing';

import { SideBarComponent } from './components/sidebar';
import { DataTableComponent } from './components/datatable';
import { ToolbarComponent } from './components/toolbar';
import { ColumnsComponent, RowsComponent, CellComponent } from './components/layout';


@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ 
    AppComponent,
    SideBarComponent,
    DataTableComponent,
    ColumnsComponent,
    CellComponent,
    RowsComponent,
    ToolbarComponent,

    FormToolbarComponent,
    HTMLLayoutComponent,
    WebixLayoutComponent
  ],
  providers:[
    appRoutingProviders
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

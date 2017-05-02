import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './components/app';
import { FormToolbarComponent }   from './components/form-toolbar';
import { HTMLLayoutComponent }   from './components/html-layout';
import { WebixLayoutComponent }   from './components/webix-layout';
import { DataLoadingComponent }   from './components/data-loading';
import { TemplateRoutingComponent } from './components/template-routing';

import { routing, appRoutingProviders }  from './app.routing';

import { SideBarComponent } from './components/sidebar';
import { DataTableComponent } from './components/datatable';
import { ToolbarComponent } from './components/toolbar';
import { ColumnsComponent, RowsComponent, CellComponent } from './components/layout';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
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
    WebixLayoutComponent,
    DataLoadingComponent,
    TemplateRoutingComponent
  ],
  providers:[
    appRoutingProviders
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

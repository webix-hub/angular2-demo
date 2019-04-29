import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormToolbarComponent }   from './components/form-toolbar.component';
import { HTMLLayoutComponent }   from './components/html-layout.component';
import { WebixLayoutComponent }   from './components/webix-layout.component';
import { TemplateRoutingComponent } from './components/template-routing.component';
import { DataLoadingComponent } from './components/data-loading.component';
import { SideBarComponent } from './components/sidebar.component';
import { DataTableComponent } from './components/datatable.component';
import { ToolbarComponent } from './components/toolbar.component';
import { ColumnsComponent, RowsComponent, CellComponent } from './components/layout.component';
    

@NgModule({
  declarations: [
    AppComponent,
    FormToolbarComponent,
    HTMLLayoutComponent,
    WebixLayoutComponent,
    TemplateRoutingComponent,
    DataLoadingComponent,

    DataTableComponent,
    ToolbarComponent,
    SideBarComponent,
    ColumnsComponent,
    RowsComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

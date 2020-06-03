import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormToolbarComponent }   from './components/form-toolbar.component';
import { HTMLLayoutComponent }   from './components/html-layout.component';
import { WebixLayoutComponent }   from './components/webix-layout.component';
import { TemplateRoutingComponent } from './components/template-routing.component';
import { DataLoadingComponent } from './components/data-loading.component';

const routes: Routes = [
  { path: 'webix-layout', component: WebixLayoutComponent },
  { path: 'data-loading', component: DataLoadingComponent },
  { path: 'html-layout', component: HTMLLayoutComponent },
  { path: 'form-grid', component: FormToolbarComponent },
  { path: 'template-routing', component: TemplateRoutingComponent, children: [
    { path: 'area1', component: WebixLayoutComponent, outlet:'sub' },
    { path: 'area2',  component: HTMLLayoutComponent, outlet:'sub' }
  ]},
  { path: '', component: HTMLLayoutComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

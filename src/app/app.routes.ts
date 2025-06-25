import { Routes } from '@angular/router';

import { DataLoadingComponent } from './components/data-loading.component';
import { FormToolbarComponent } from './components/form-toolbar.component';
import { HTMLLayoutComponent } from './components/html-layout.component';
import { TemplateRoutingComponent } from './components/template-routing.component';
import { WebixLayoutComponent } from './components/webix-layout.component';

export const routes: Routes = [
    { path: 'html-layout', component: HTMLLayoutComponent },
    { path: 'webix-layout', component: WebixLayoutComponent },
    { path: 'data-loading', component: DataLoadingComponent },
    { path: 'form-grid', component: FormToolbarComponent },
    { path: 'template-routing', component: TemplateRoutingComponent, children: [
        { path: 'area1', component: WebixLayoutComponent, outlet:'sub' },
        { path: 'area2', component: HTMLLayoutComponent, outlet:'sub' }
    ]},
    { path: '', redirectTo: '/html-layout', pathMatch: 'full' },
];
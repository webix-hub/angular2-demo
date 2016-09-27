import { FormToolbarComponent }   from './components/form-toolbar';
import { HTMLLayoutComponent }   from './components/html-layout';
import { WebixLayoutComponent }   from './components/webix-layout';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'webix-layout', component: WebixLayoutComponent },
  { path: 'html-layout', component: HTMLLayoutComponent },
  { path: 'form-grid', component: FormToolbarComponent },
  { path: '', component: HTMLLayoutComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
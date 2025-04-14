import { Component } from '@angular/core';
import { ColumnsComponent, CellComponent } from './layout.component';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'webix-template-routing',
    template: `
            <webix-columns>
              <webix-cell width="320" height="700">
                <nav>
                  <a [routerLink]="['/template-routing', { outlets: { sub: 'area1' } }]"  routerLinkActive="active">Area 1</a>
                  <a [routerLink]="['/template-routing', { outlets: { sub: 'area2' } }]"  routerLinkActive="active">Area 2</a>
                </nav>
              </webix-cell>
              <webix-cell>
                <router-outlet name='sub'></router-outlet>
              </webix-cell>
            </webix-columns>`,
    imports: [ColumnsComponent, CellComponent, RouterLinkActive, RouterLink, RouterOutlet]
})
export class TemplateRoutingComponent { }
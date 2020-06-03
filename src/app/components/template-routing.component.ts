import { Component } from '@angular/core';

@Component({
  selector: 'template-routing',
  template: `
            <columns>
              <cell width="320" height="600">
                <nav>
                  <a [routerLink]="['/template-routing', { outlets: { sub: 'area1' } }]"     routerLinkActive="active">Area 1</a>
                  <a [routerLink]="['/template-routing', { outlets: { sub: 'area2' } }]"     routerLinkActive="active">Area</a>
                </nav>
              </cell>
              <cell>
                <router-outlet name='sub'></router-outlet>
              </cell>
            </columns>`
})
export class TemplateRoutingComponent {

}

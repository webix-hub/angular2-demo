import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<nav>
               <a routerLink="/html-layout"   routerLinkActive="active">HTML Layout</a>
               <a routerLink="/webix-layout"  routerLinkActive="active">Webix Layout</a>
               <a routerLink="/form-grid"  routerLinkActive="active">Form and Grid</a>
             </nav>
             <router-outlet></router-outlet>`
})
export class AppComponent { }

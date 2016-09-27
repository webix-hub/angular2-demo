Webix for Angular 2
===================

[![Join the chat at https://gitter.im/webix-hub/webix](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/webix-hub/webix) 

## How to run this demo

After cloning the repo run

```
npm install
npm run typings install
nmp run start
```

## Basics of usage

There is no any special tricks for using Webix with Angular JS.

This project differs from default Angular 2 quickstart only in two ways

a) index.html contains references to webix files

```html
    <script src="//cdn.webix.com/edge/webix.js"></script>
    <link rel="stylesheet" href="//cdn.webix.com/edge/webix.css">
```

b) typings.json has webix typings added

```
    npm run typings install df~webix --save --global
```

### Webix based components

When you need to create a webix based view, just create a normal Angular 2 component, with webix.ui call inside.

```js
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'datatable',
  template:""
})
export class DataTableComponent implements OnDestroy, OnInit {
  private ui : webix.ui.datatable;
  
  constructor(root: ElementRef) {
        this.ui = <webix.ui.datatable> webix.ui({
            container: root.nativeElement
            view:"datatable", autoConfig:true, url:"data.php"
        })
    }
    
    ngOnInit(){
      this.ui.resize();
    }
    ngOnDestroy(){
      this.ui.destructor();
    }
}
```

webix.ui call, inside of class constructor, inits the Webix view. You can use any webix component and options here. A single Angular component can host a single Webix component or a layout with multiple Webix components. 

ngOnInit handler is used to resize component to the parent contains size ( it is not necessary if you are using fixed sizes in the webix.ui config ) 

ngOnDestroy is used to clean the memory after the view is disposed of.


### Loading data into Webix component

Webix component can load data directly from the server side. So, the component can work without data providers infrastructure. 

If necessary, same as for normal Angular components, you can use @Input attributes or data services to provide a data for the component. 
In both cases, the data must be set through "data" property of the component. Such way of data setting support both raw data objects and promises of data objects

**app/services/film.ts**
```js
@Injectable()
export class FilmService {
    getFilms(): Promise<Film[]>{
        return Promise.resolve(FILMS);
    } 
}
```

**app/components/datatable.ts**
```js
  constructor(private films: FilmService, root: ElementRef) {
        this.ui = <webix.ui.datatable> webix.ui({
            container: root.nativeElement,
            view:"datatable", autoConfig:true, data: this.films.getFilms()
        })
    }
```

### Calling API of webix components

You can add a public method to the component, which will call any necessary public method by using this.ui as reference to the Webix object

**app/components/datatable.js**
```js
    addRow(){
      this.ui.add({ title:"New row" });
    }
```

### Handling webix events

You can expose events of Webix component through the @Output property

**app/components/datatable.js**
```js
export class DataTableComponent implements OnDestroy, OnInit {
  private ui : webix.ui.datatable;
  @Output() onRowSelect = new EventEmitter<Film>();

  constructor(private films: FilmService, root: ElementRef) {
        this.ui = <webix.ui.datatable> webix.ui({
            container: root.nativeElement,
            view:"datatable", autoConfig:true, data: this.films.getFilms(),
            on:{
              onAfterSelect: (id) => this.onRowSelect.emit(this.ui.getItem(id))
            }
        })
    }
 ```   

The above code registers a public "onRowSelect" event for the datatable component, which will fire each time as row selected in the Webix component. 

You can handle it in the parent component like next

```js
@Component({
  selector: 'html-layout',
  template: `<h2>Initing Webix component in separate HTML containers</h2>
            <datatable (onRowSelect)="fillInfo($event)" class='pagebox'></datatable>
            <div *ngIf="selectedFilm">
              <h3> Selected Film </h3>
              <ul>
                <li> Title : {{selectedFilm.title}} </li>
                <li> Votes : {{selectedFilm.votes}} </li>
              </ul>
            </div>
            `
})
export class HTMLLayoutComponent {
  private selectedFilm: Film;
  fillInfo(film : Film){
    this.selectedFilm = film;
  }
}

```

Here, parent component subscribes to the onRowSelect event and shows the selected record info, when it is available. 

A similar approach can be used to map any other event through a @Output properties.

### Webix layouts

The recommended approach is to host all webix layout based components in a single angular component 

```js
export class MyLayoutComponent implements OnDestroy, OnInit {
  private ui : webix.ui.datatable;
  
  constructor(private films: FilmService, root: ElementRef) {
        this.ui = <webix.ui.layout> webix.ui({
            container: root.nativeElement,
            view:"layout", 
            rows:[
                some,
                other,
                { cols:[ views, here ] }
            ]
        })
    }
```

While it is tempting to define layouts directly as part of template property, there are some problems with such approach. 
Webix Layouts are using fixed size concept, which is not compatible with the Angular way of UI building. So while you can use Webix layouts, they will behave differently from normal Angular components ( most notable, you will not be able to use ngIf to hide|show part of layout )

With above disclaimer in mind, you can check app/components/layout.ts. This file provides a three layout components, which still allows using webix layout from an Angular template. 

```html
<rows type="space" class="pagebox">
  <cell><toolbar (onButton)="buttonClick($event)">></toolbar></cell>
  <cell>
    <columns type="wide">
      <cell width="300"><sidebar></sidebar></cell>
      <cell><datatable></datatable></cell>
    </columns>
  </cell>
</rows>
```

- rows - create a row layout
- columns - create a column layout
- cell - wraps a single cell of a layout

rows and cols tags support type, padding and margin attributes ( similar to webix layouts )

cell tag supports width, height, minWidht, minHeight, maxWidth, maxHeight, gravity attributes, similar to the webix sizing attributes. 


### Routing

There is no way to define routerLink attributes inside of Webix UI.
You need to use onItemClick event of component if you need to route to a different view

```js
    this.ui = <webix.ui.menu>webix.ui({
      container: root.nativeElement,
      view: "menu", layout: "y", minHeight: 200, select: true,
      data: [
        { id: "html-layout", value: "HTML Layout" },
        { id: "webix-layout", value: "Webix Layout" },
        { id: "form-grid", value: "Form and Grid" }
      ],
      on: {
        onItemClick: (id) => this.router.navigate([id])
      }
    })
```

### Limitations

- Webix Layouts are not compatible with ngIf and any other DOM mutation directives

## License

The MIT License (MIT)    
Copyright (c) 2016 XBSoftware

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
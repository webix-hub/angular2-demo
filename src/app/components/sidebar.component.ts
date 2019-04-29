import { Component, Input, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  template: ""
})
export class SideBarComponent implements OnDestroy, OnInit {
  private ui: webix.ui.menu;

  constructor(private router: Router, root: ElementRef) {
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

    this.ui.select("webix-layout", false);
  }

  ngOnInit() {
    this.ui.resize();
  }
  ngOnDestroy() {
    this.ui.destructor();
  }
}
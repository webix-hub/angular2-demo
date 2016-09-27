import { Component, Input, ElementRef, AfterContentInit , ContentChildren, QueryList, forwardRef, OnInit } from '@angular/core';

@Component({
  selector: 'columns',
  template:"<ng-content></ng-content>"
})
export class ColumnsComponent implements AfterContentInit  {
    private ui : webix.ui.layout;
    private root: ElementRef;

    @Input() type: string;
    @Input() padding: number;
    @Input() margin: number;

    @ContentChildren(forwardRef(() => CellComponent)) cells: QueryList<CellComponent>;

    constructor(root: ElementRef) {
        this.root = root;
    }

    getBaseConfig() : any {
        return {
            view:"layout",
            cols:[] 
        };
    }

    ngOnInit() : void{
        let config:any = this.getBaseConfig();
        config.container = this.root.nativeElement;

        if (this.padding)
            config.padding = this.padding*1;
        if (this.margin)
            config.margin = this.margin*1;
        if (this.type)
            config.type = this.type;

        this.ui = <webix.ui.layout> webix.ui(config);
    }


    ngAfterContentInit() {
        this.cells.forEach((item) => this.ui.addView( item.getView() ) )
        this.ui.resize();
    }
}

@Component({
  selector: 'rows',
  template:"<ng-content></ng-content>"
})
export class RowsComponent  extends ColumnsComponent {
    constructor(root: ElementRef) {
        super(root);
    }

    getBaseConfig() : any {
        return {
            view:"layout",
            rows:[] 
        };
    }
}

@Component({
  selector: 'cell',
  template:"<ng-content></ng-content>"
})
export class CellComponent{
    private root: ElementRef;
    @Input() height: number;
    @Input() width: number;
    @Input() minHeight: number;
    @Input() minWidth: number;
    @Input() maxHeight: number;
    @Input() maxWidth: number;
    @Input() gravity: number;

    constructor(root: ElementRef) {
         this.root = root;
    }

    getView() : any {
        var view = this.root.nativeElement.querySelector("[view_id]");
        var result, config;
        if (!view)
            result = config = { view:"template", template: this.root.nativeElement.innerHTML };
        else {
            result =  webix.$$(view.getAttribute("view_id"));
            config = result.config;
        }

        if (this.width)
            config.width = this.width*1;
        if (this.height)
            config.height = this.height*1;
        if (this.minHeight)
            config.minHeight = this.minHeight*1;
        if (this.minWidth)
            config.minWidth = this.minWidth*1;
        if (this.maxHeight)
            config.maxHeight = this.maxHeight*1;
        if (this.maxWidth)
            config.maxWidth = this.maxWidth*1;
        if (this.gravity)
            config.gravity = this.gravity*1;

        return result;
    }
}
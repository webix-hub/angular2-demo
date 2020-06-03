import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  QueryList
} from '@angular/core';

@Component({
  selector: 'columns',
  template:'<ng-content></ng-content>'
})
export class ColumnsComponent implements AfterContentInit, OnInit  {
    private ui: webix.ui.layout;
    private root: ElementRef;

    @Input() type: string;
    @Input() padding: number;
    @Input() margin: number;

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    @ContentChildren(forwardRef(() => CellComponent)) cells: QueryList<CellComponent>;

    constructor(root: ElementRef) {
        this.root = root;
    }

    getBaseConfig(): any {
        return {
            view:'layout',
            cols:[]
        };
    }

    ngOnInit(): void{
        const config: any = this.getBaseConfig();
        config.container = this.root.nativeElement;

        if (this.padding)
            config.padding = +this.padding;
        if (this.margin)
            config.margin = +this.margin;
        if (this.type)
            config.type = this.type;

        this.ui = webix.ui(config) as webix.ui.layout;
    }


    ngAfterContentInit(): void {
        this.cells.forEach((item) => this.ui.addView( item.getView() ) )
        this.ui.resize();
    }
}

@Component({
  selector: 'rows',
  template:'<ng-content></ng-content>'
})
export class RowsComponent  extends ColumnsComponent {
    constructor(root: ElementRef) {
        super(root);
    }

    getBaseConfig(): any {
        return {
            view:'layout',
            rows:[]
        };
    }
}

@Component({
  selector: 'cell',
  template:'<ng-content></ng-content>'
})
export class CellComponent{
    private root: ElementRef;
    @Input() content: string;
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

    getView(): any {
        const view = this.root.nativeElement.querySelector('[view_id]');
        let result;
        let config;
        if (!view)
            result = config = { view:'template', content: this.content || this.root.nativeElement };
        else {
            result =  webix.$$(view.getAttribute('view_id'));
            config = result.config;
        }

        if (this.width)
            config.width = +this.width;
        if (this.height)
            config.height = +this.height;
        if (this.minHeight)
            config.minHeight = +this.minHeight;
        if (this.minWidth)
            config.minWidth = +this.minWidth;
        if (this.maxHeight)
            config.maxHeight = +this.maxHeight;
        if (this.maxWidth)
            config.maxWidth = +this.maxWidth;
        if (this.gravity)
            config.gravity = +this.gravity;

        return result;
    }
}

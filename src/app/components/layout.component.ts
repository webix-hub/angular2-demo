import {
    Component, ElementRef, AfterContentInit ,
    contentChildren, forwardRef, numberAttribute,
    inject, input, OnInit
} from '@angular/core';

@Component({
    selector: 'webix-columns',
    template: '<ng-content></ng-content>'
})
export class ColumnsComponent implements AfterContentInit, OnInit {
    private ui!: webix.ui.layout;
    private root: ElementRef;

    type = input<string>();
    margin = input<number, unknown>(0, { transform: numberAttribute });
    padding = input<number, unknown>(0, { transform: numberAttribute });

    cells = contentChildren<CellComponent>(forwardRef(() => CellComponent));

    constructor(){
        this.root = inject(ElementRef);
    }

    getBaseConfig(): any {
        return {
            view:'layout',
            cols:[],
        };
    }

    ngOnInit(): void {
        const config:any = this.getBaseConfig();
        config.container = this.root.nativeElement;

        const type = this.type();
        if (type)
            config.type = type;
        const margin = this.margin();
        if (margin)
            config.margin = margin;
        const padding = this.padding();
        if (padding)
            config.padding = padding;

        this.ui = <webix.ui.layout> webix.ui(config);
    }

    ngAfterContentInit(){
        this.cells().forEach((item) => this.ui.addView(item.getView()));
        this.ui.resize();
    }
}

@Component({
    selector: 'webix-rows',
    template: '<ng-content></ng-content>'
})
export class RowsComponent extends ColumnsComponent {
    override getBaseConfig() : any {
        return {
            view:'layout',
            rows:[],
        };
    }
}

@Component({
    selector: 'webix-cell',
    template: '<ng-content></ng-content>'
})
export class CellComponent {
    private root: ElementRef;
    content = input<string>();
    height = input<number, unknown>(0, { transform: numberAttribute });
    width = input<number, unknown>(0, { transform: numberAttribute });
    minHeight = input<number, unknown>(0, { transform: numberAttribute });
    minWidth = input<number, unknown>(0, { transform: numberAttribute });
    maxHeight = input<number, unknown>(0, { transform: numberAttribute });
    maxWidth = input<number, unknown>(0, { transform: numberAttribute });
    gravity = input<number, unknown>(0, { transform: numberAttribute });

    constructor(){
        this.root = inject(ElementRef);
    }

    getView(): any {
        const view = this.root.nativeElement.querySelector('[view_id]');
        let result, config;
        if (!view)
            result = config = { view:'template', content: this.content() || this.root.nativeElement } as webix.ui.baseviewConfig;
        else {
            result =  webix.$$(view.getAttribute('view_id'));
            config = result.config;
        }

        const width = this.width();
        if (width)
            config.width = width;
        const height = this.height();
        if (height)
            config.height = height;
        const minHeight = this.minHeight();
        if (minHeight)
            config.minHeight = minHeight;
        const minWidth = this.minWidth();
        if (minWidth)
            config.minWidth = minWidth;
        const maxHeight = this.maxHeight();
        if (maxHeight)
            config.maxHeight = maxHeight;
        const maxWidth = this.maxWidth();
        if (maxWidth)
            config.maxWidth = maxWidth;
        const gravity = this.gravity();
        if (gravity)
            config.gravity = gravity;

        return result;
    }
}
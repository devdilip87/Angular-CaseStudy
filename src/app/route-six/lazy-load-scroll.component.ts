import { Component, OnInit, AfterViewInit, Output, EventEmitter, ElementRef, ViewChild, Input, OnDestroy } from '@angular/core';

@Component({
    selector: 'lazy-load-scroll',
    template: `<ng-content></ng-content><div class="footer" #footer></div>`
})
export class LazyLoadScrollComponent implements AfterViewInit, OnDestroy {
    @Input() options = {};
    @Output() scrolled = new EventEmitter();
    @ViewChild('footer') footer: ElementRef<HTMLElement>;

    private observer: IntersectionObserver;

    constructor(private host: ElementRef) { }

    ngAfterViewInit() {
        const options = {
            root: null
        };

        this.observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            this.scrolled.emit();
        }
        }, options);

        this.observer.observe(this.footer.nativeElement);
    }

    ngOnDestroy() {
        this.observer.disconnect();
    }

}

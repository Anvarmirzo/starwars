import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
    selector: '[appInfiniteScroll]',
    standalone: true
})
export class InfiniteScrollDirective {
    @Input() needToTrigger?: boolean
    @Output() callback = new EventEmitter()

    @HostListener('scroll', ['$event'])
    onScroll(e: Event) {
        const element = e.target as HTMLDivElement;
        const currentScrollPosition = element.scrollTop;
        const totalScrollTrack = element.scrollHeight - element.clientHeight;
        const unScrolledPercentage = (currentScrollPosition / totalScrollTrack) * 100;
        const needToFetch = Math.floor(unScrolledPercentage) >= 70

        if (this.needToTrigger && needToFetch) {
            this.callback.emit()
        }
    }
}

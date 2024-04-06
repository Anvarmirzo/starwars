import {
    Directive,
    effect,
    ElementRef,
    EventEmitter,
    HostListener,
    inject,
    Input, OnChanges,
    Output,
    signal, SimpleChanges,
} from '@angular/core'
import {Store} from '@ngrx/store'

@Directive({
    selector: '[appInfiniteScroll]',
    standalone: true
})
export class InfiniteScrollDirective implements OnChanges {
    store = inject(Store)
    elementRef = inject(ElementRef)

    @Input() selector?: any
    @Input() needToTrigger?: boolean
    needToTriggerSignal = signal<boolean>(false)
    @Output() callback = new EventEmitter()

    @HostListener('scroll', ['$event'])
    onScroll(e: Event) {
        this.fetchOnScroll({el: e.target as HTMLDivElement})
    }


    constructor() {
        effect(() => {
            if (!this.selector) return

            const isLoaded = this.store.selectSignal(this.selector)
            const hasVerticalScroll = (this.elementRef.nativeElement?.scrollHeight > this.elementRef.nativeElement?.clientHeight)

            if (isLoaded() && !hasVerticalScroll && this.needToTriggerSignal()) {
                this.fetchOnScroll({forceFetch: true})
            }
        })
    }

    ngOnChanges(changes: SimpleChanges) {
        const change = changes['needToTrigger']
        if (change.previousValue === change.currentValue) return
        this.needToTriggerSignal.set(changes['needToTrigger'].currentValue)
    }

    fetchOnScroll({el, forceFetch}: { el?: HTMLDivElement, forceFetch?: boolean }) {
        const element = el ?? this.elementRef.nativeElement
        if (!element) return

        const currentScrollPosition = element.scrollTop
        const totalScrollTrack = element.scrollHeight - element.clientHeight
        const unScrolledPercentage = (currentScrollPosition / totalScrollTrack) * 100
        const needToFetch = Math.floor(unScrolledPercentage) >= 70

        if (this.needToTrigger && (forceFetch || needToFetch)) {
            this.callback.emit()
        }
    }
}

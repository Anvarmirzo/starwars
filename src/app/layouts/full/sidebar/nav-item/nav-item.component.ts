import {Component, inject, Input} from '@angular/core'
import {NavItem} from './nav-item'
import {Router} from '@angular/router'
import {NgClass, NgIf} from '@angular/common'
import {IconsModule} from '../../../../modules/icons/icons.module'
import {MaterialModule} from '../../../../modules/material/material.module'

@Component({
    selector: 'app-nav-item',
    templateUrl: './nav-item.component.html',
    styleUrls: [],
    imports: [
        NgIf,
        MaterialModule,
        NgClass,
        IconsModule
    ],
    standalone: true
})
export class AppNavItemComponent {
    @Input() item: NavItem | any
    @Input() depth: any
    router = inject(Router)

    constructor() {
        if (this.depth === undefined) {
            this.depth = 0
        }
    }

    onItemSelected(item: NavItem) {
        if (!item.children || !item.children.length) {
            this.router.navigate([item.route])
        }

        // scroll
        document.querySelector('.page-wrapper')?.scroll({
            top: 0,
            left: 0,
        })
    }
}

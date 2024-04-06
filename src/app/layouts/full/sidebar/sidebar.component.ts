import {Component, OnInit, ViewEncapsulation} from '@angular/core'
import {navItems} from './sidebar-data'
import {BrandingComponent} from './branding.component'
import {AppNavItemComponent} from './nav-item/nav-item.component'
import {NgForOf} from '@angular/common'
import {MaterialModule} from '../../../modules/material/material.module'

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    imports: [
        BrandingComponent,
        MaterialModule,
        AppNavItemComponent,
        NgForOf,
    ],
    standalone: true,
    encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {
    navItems = navItems

    ngOnInit(): void {
    }
}

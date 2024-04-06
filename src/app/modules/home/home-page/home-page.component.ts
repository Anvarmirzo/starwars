import {Component} from '@angular/core'
import {RouterLink} from '@angular/router'
import {MatAnchor} from '@angular/material/button'

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        RouterLink,
        MatAnchor
    ],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
}

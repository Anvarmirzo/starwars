import {Component} from '@angular/core';

@Component({
    selector: 'app-branding',
    template: `
        <div class="branding">
            <a href="/">
                <img
                        width="100%"
                        height="80px"
                        src="./assets/images/logos/star-wars.svg"
                        class="align-middle m-2"
                        alt="logo"
                />
            </a>
        </div>
    `,
    standalone: true
})
export class BrandingComponent {
    constructor() {
    }
}

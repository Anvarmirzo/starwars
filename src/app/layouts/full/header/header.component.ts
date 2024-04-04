import {
    Component,
    Output,
    EventEmitter,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router, RouterLink} from '@angular/router';
import {IconsModule} from '../../../modules/icons/icons.module';
import {AsyncPipe, NgIf} from '@angular/common';
import {MaterialModule} from '../../../modules/material/material.module';
import {AuthService} from '../../../services/auth.service';
import {async} from 'rxjs';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [
        MaterialModule,
        RouterLink,
        IconsModule,
        NgIf,
        AsyncPipe,
    ],
    standalone: true
})
export class HeaderComponent {
    @Input() showToggle = true;
    @Input() toggleChecked = false;
    @Output() toggleMobileNav = new EventEmitter<void>();
    @Output() toggleMobileFilterNav = new EventEmitter<void>();
    @Output() toggleCollapsed = new EventEmitter<void>();
    user=this.authService.getUser;
    showFiller = false;

    constructor(public dialog: MatDialog, private authService: AuthService, private router: Router) {
    }

    onLogout() {
        return this.authService.logOut().then(() => this.router.navigate(['auth', 'login']))
    }

}

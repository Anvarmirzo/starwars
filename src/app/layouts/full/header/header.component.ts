import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {RouterLink} from '@angular/router';
import {IconsModule} from '../../../modules/icons/icons.module';
import {NgIf} from '@angular/common';
import {MaterialModule} from '../../../modules/material/material.module';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  imports: [
    MaterialModule,
    RouterLink,
    IconsModule,
    NgIf,
  ],
  standalone: true
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;

  constructor(public dialog: MatDialog) {}
}

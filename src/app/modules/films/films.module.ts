import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FilmsPageComponent} from './films-page/films-page.component'
import {RouterModule} from '@angular/router'
import {FilmsRoutes} from './films.routing.module'
import {IconsModule} from '../icons/icons.module'
import {MaterialModule} from '../material/material.module'
import {InfiniteScrollDirective} from '../../directives/infinite-scroll.directive'


@NgModule({
  declarations: [
    FilmsPageComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(FilmsRoutes),
        MaterialModule,
        IconsModule,
        InfiniteScrollDirective
    ]
})
export class FilmsModule {
}

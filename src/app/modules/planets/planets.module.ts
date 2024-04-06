import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PlanetsPageComponent} from './planets-page/planets-page.component'
import {RouterModule} from '@angular/router'
import {PlanetsRoutes} from './planets.routing.module'
import {IconsModule} from '../icons/icons.module'
import {MaterialModule} from '../material/material.module'
import {InfiniteScrollDirective} from '../../directives/infinite-scroll.directive'


@NgModule({
    declarations: [
        PlanetsPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(PlanetsRoutes),
        MaterialModule,
        IconsModule,
        InfiniteScrollDirective
    ]
})
export class PlanetsModule {
}

import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {VehiclesPageComponent} from './vehicles-page/vehicles-page.component'
import {RouterModule} from '@angular/router'
import {PeopleRoutes} from './vehicles.routing.module'
import {IconsModule} from '../icons/icons.module'
import {MaterialModule} from '../material/material.module';
import {InfiniteScrollDirective} from '../../directives/infinite-scroll.directive';


@NgModule({
    declarations: [
        VehiclesPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(PeopleRoutes),
        MaterialModule,
        IconsModule,
        InfiniteScrollDirective
    ]
})
export class VehiclesModule {
}

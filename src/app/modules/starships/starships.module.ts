import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StarshipsPageComponent} from './starships-page/starships-page.component';
import {RouterModule} from '@angular/router';
import {StarshipsRoutes} from './starships.routing.module';
import {IconsModule} from '../icons/icons.module';
import {MaterialModule} from '../material/material.module';
import {InfiniteScrollDirective} from '../../directives/infinite-scroll.directive';


@NgModule({
    declarations: [
        StarshipsPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(StarshipsRoutes),
        MaterialModule,
        IconsModule,
        InfiniteScrollDirective
    ]
})
export class StarshipsModule {
}

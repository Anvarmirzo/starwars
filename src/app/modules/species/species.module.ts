import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpeciesPageComponent} from './species-page/species-page.component';
import {RouterModule} from '@angular/router';
import {SpeciesRoutes} from './species.routing.module';
import {IconsModule} from '../icons/icons.module';
import {MaterialModule} from '../material/material.module';
import {InfiniteScrollDirective} from '../../directives/infinite-scroll.directive';


@NgModule({
  declarations: [
    SpeciesPageComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(SpeciesRoutes),
        MaterialModule,
        IconsModule,
        InfiniteScrollDirective
    ]
})
export class SpeciesModule {
}

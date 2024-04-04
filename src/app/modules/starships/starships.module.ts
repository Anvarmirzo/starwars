import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StarshipsPageComponent} from './starships-page/starships-page.component';
import {RouterModule} from '@angular/router';
import {StarshipsRoutes} from './starships.routing.module';
import {IconsModule} from '../icons/icons.module';
import {MaterialModule} from '../material/material.module';


@NgModule({
    declarations: [
        StarshipsPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(StarshipsRoutes),
        MaterialModule,
        IconsModule
    ]
})
export class StarshipsModule {
}

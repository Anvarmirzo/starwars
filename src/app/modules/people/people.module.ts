import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PeoplePageComponent} from './people-page/people-page.component';
import {RouterModule} from '@angular/router';
import {PeopleRoutes} from './people.routing.module';
import {IconsModule} from '../icons/icons.module';
import {MaterialModule} from '../material/material.module';


@NgModule({
    declarations: [
        PeoplePageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(PeopleRoutes),
        MaterialModule,
        IconsModule
    ]
})
export class PeopleModule {
}

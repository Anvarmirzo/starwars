import { Routes } from '@angular/router';
import {PeoplePageComponent} from './people-page/people-page.component';

export const PeopleRoutes: Routes = [
  {
    path: '',
    component: PeoplePageComponent,
    data: {
      title: 'People',
    },
  },
];

import { Routes } from '@angular/router';
import {VehiclesPageComponent} from './vehicles-page/vehicles-page.component';

export const PeopleRoutes: Routes = [
  {
    path: '',
    component: VehiclesPageComponent,
    data: {
      title: 'Vehicles',
    },
  },
];

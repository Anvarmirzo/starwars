import { Routes } from '@angular/router';
import {SpeciesPageComponent} from './species-page/species-page.component';

export const SpeciesRoutes: Routes = [
  {
    path: '',
    component: SpeciesPageComponent,
    data: {
      title: 'Species',
    },
  },
];

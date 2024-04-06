import { Routes } from '@angular/router'
import {PlanetsPageComponent} from './planets-page/planets-page.component'

export const PlanetsRoutes: Routes = [
  {
    path: '',
    component: PlanetsPageComponent,
    data: {
      title: 'Planets',
    },
  },
]

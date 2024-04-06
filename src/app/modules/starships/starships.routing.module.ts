import { Routes } from '@angular/router'
import {StarshipsPageComponent} from './starships-page/starships-page.component'

export const StarshipsRoutes: Routes = [
  {
    path: '',
    component: StarshipsPageComponent,
    data: {
      title: 'Starships',
    },
  },
]

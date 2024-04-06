import { Routes } from '@angular/router'
import {FilmsPageComponent} from './films-page/films-page.component'

export const FilmsRoutes: Routes = [
  {
    path: '',
    component: FilmsPageComponent,
    data: {
      title: 'Films',
    },
  },
]

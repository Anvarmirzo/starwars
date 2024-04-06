import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {IResponse} from '../../../../models';
import {IFilms} from '../../../../models/films';

export const filmsPageActions = createActionGroup({
    source: 'Films Page',
    events: {
        'Load list': emptyProps(),
        'Load list success': props<{ data: IResponse<IFilms> }>(),
        'Load list failure': emptyProps(),
        'Reset page': emptyProps(),
    },
});

import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {IResponse} from '../../../../models';
import {IPlanets} from '../../../../models/planets';

export const planetsPageActions = createActionGroup({
    source: 'Planets Page',
    events: {
        'Load list': emptyProps(),
        'Load list success': props<{ data: IResponse<IPlanets> }>(),
        'Load list failure': emptyProps(),
        'Reset page': emptyProps(),
    },
});

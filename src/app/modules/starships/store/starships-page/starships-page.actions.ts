import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {IResponse} from '../../../../models'
import {IStarships} from '../../../../models/starships';

export const starshipsPageActions = createActionGroup({
    source: 'Starships Page',
    events: {
        'Load list': emptyProps(),
        'Load list success': props<{ data: IResponse<IStarships> }>(),
        'Load list failure': emptyProps(),
        'Reset page': emptyProps(),
    },
})

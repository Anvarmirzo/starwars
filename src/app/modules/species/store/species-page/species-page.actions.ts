import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {IResponse} from '../../../../models'
import {ISpecies} from '../../../../models/species'

export const speciesPageActions = createActionGroup({
    source: 'Species Page',
    events: {
        'Load list': emptyProps(),
        'Load list success': props<{ data: IResponse<ISpecies> }>(),
        'Load list failure': emptyProps(),
        'Reset page': emptyProps(),
    },
})

import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {IResponse} from '../../../../models'
import {IVehicles} from '../../../../models/vehicles';

export const vehiclesPageActions = createActionGroup({
    source: 'Vehicles Page',
    events: {
        'Load list': emptyProps(),
        'Load list success': props<{ data: IResponse<IVehicles> }>(),
        'Load list failure': emptyProps(),
        'Reset page': emptyProps(),
    },
})

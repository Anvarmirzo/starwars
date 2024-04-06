import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {IResponse} from '../../../../models';
import {IPeople} from '../../../../models/people';

export const peoplePageActions = createActionGroup({
    source: 'People Page',
    events: {
        'Load list': emptyProps(),
        'Load list success': props<{ data: IResponse<IPeople> }>(),
        'Load list failure': emptyProps(),
        'Reset page': emptyProps(),
    },
});

import {createReducer, on} from '@ngrx/store'
import {eStatus, IResponse} from '../../../../models'
import {vehiclesPageActions} from './vehicles-page.actions'
import {IVehicles} from '../../../../models/vehicles';

export interface IVehiclesPageReducer {
    pagination: Omit<IResponse<IVehicles>, 'results'> | null
    list: IVehicles[]
    status: eStatus
}

export const initialState: IVehiclesPageReducer = {
    pagination: null,
    list: [],
    status: eStatus.Pending,
}

export const vehiclesPageReducer = createReducer(
    initialState,
    on(
        vehiclesPageActions.loadList,
        (state): IVehiclesPageReducer => ({
            ...state,
            status: eStatus.Loading
        }),
    ),
    on(
        vehiclesPageActions.loadListSuccess,
        (state, {data: {results, ...pagination}}): IVehiclesPageReducer => ({
            ...state,
            status: eStatus.Success,
            list: [...state.list, ...results],
            pagination
        }),
    ),
    on(
        vehiclesPageActions.loadListFailure,
        (state): IVehiclesPageReducer => ({
            ...state,
            status: eStatus.Error
        }),
    ),
    on(
        vehiclesPageActions.resetPage,
        (): IVehiclesPageReducer => ({
            pagination: null,
            list: [],
            status: eStatus.Pending,
        }),
    ),
)

import {createReducer, on} from '@ngrx/store'
import {eStatus, IResponse} from '../../../../models'
import {speciesPageActions} from './species-page.actions'
import {ISpecies} from '../../../../models/species'

export interface ISpeciesPageReducer {
    pagination: Omit<IResponse<ISpecies>, 'results'> | null
    list: ISpecies[]
    status: eStatus
}

export const initialState: ISpeciesPageReducer = {
    pagination: null,
    list: [],
    status: eStatus.Pending,
}

export const speciesPageReducer = createReducer(
    initialState,
    on(
        speciesPageActions.loadList,
        (state): ISpeciesPageReducer => ({
            ...state,
            status: eStatus.Loading
        }),
    ),
    on(
        speciesPageActions.loadListSuccess,
        (state, {data: {results, ...pagination}}): ISpeciesPageReducer => ({
            ...state,
            status: eStatus.Success,
            list: [...state.list, ...results],
            pagination
        }),
    ),
    on(
        speciesPageActions.loadListFailure,
        (state): ISpeciesPageReducer => ({
            ...state,
            status: eStatus.Error
        }),
    ),
    on(
        speciesPageActions.resetPage,
        (): ISpeciesPageReducer => ({
            pagination: null,
            list: [],
            status: eStatus.Pending,
        }),
    ),
)

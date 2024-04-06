export interface IResponse<T> {
    count: number
    next: string | null
    previous: string | null
    results: T[]
}

export enum eStatus {
    Pending = 'pending',
    Loading = 'loading',
    Error = 'error',
    Success = 'success',
}

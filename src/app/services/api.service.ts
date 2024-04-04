import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {IPeople} from '../models/people'
import {IResponse} from '../models'
import {IPlanets} from '../models/planets'
import {ISpecies} from '../models/species'
import {IStarships} from '../models/starships'
import {IVehicles} from '../models/vehicles'
import {IFilms} from '../models/films'

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private URL = 'https://swapi.dev/api'

    constructor(private http: HttpClient) {
    }

    getPeople(next?: string | null) {
        return this.http.get<IResponse<IPeople>>(next ?? `${this.URL}/people`)
    }

    getPlanets(next?: string | null) {
        return this.http.get<IResponse<IPlanets>>(next ?? `${this.URL}/planets`)
    }

    getFilms(next?: string | null) {
        return this.http.get<IResponse<IFilms>>(next ?? `${this.URL}/films`)
    }

    getStarships(next?: string | null) {
        return this.http.get<IResponse<IStarships>>(next ?? `${this.URL}/starships`)
    }

    getVehicles(next?: string | null) {
        return this.http.get<IResponse<IVehicles>>(next ?? `${this.URL}/vehicles`)
    }

    getSpecies(next?: string | null) {
        return this.http.get<IResponse<ISpecies>>(next ?? `${this.URL}/species`)
    }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPeople} from '../models/people';
import {IResponse} from '../models';
import {IPlanets} from '../models/planets';
import {ISpecies} from '../models/species';
import {IStarships} from '../models/starships';
import {IVehicles} from '../models/vehicles';
import {IFilms} from '../models/films';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private URL = 'https://swapi.dev/api'

    constructor(private http: HttpClient) {
    }

    getPeople() {
        return this.http.get<IResponse<IPeople>>(`${this.URL}/people`);
    }

    getPlanets() {
        return this.http.get<IResponse<IPlanets>>(`${this.URL}/planets`);
    }

    getFilms() {
        return this.http.get<IResponse<IFilms>>(`${this.URL}/films`);
    }

    getStarships() {
        return this.http.get<IResponse<IStarships>>(`${this.URL}/starships`);
    }

    getVehicles() {
        return this.http.get<IResponse<IVehicles>>(`${this.URL}/vehicles`);
    }

    getSpecies() {
        return this.http.get<IResponse<ISpecies>>(`${this.URL}/species`);
    }
}

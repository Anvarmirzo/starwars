import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {signal} from '@angular/core';
import {IFilms} from '../../../models/films';


@Component({
    selector: 'app-films-page',
    templateUrl: './films-page.component.html',
    styleUrls: ['./films-page.component.scss']
})
export class FilmsPageComponent implements OnInit {
    list = signal<IFilms[]>([])
    isLoading = signal(true)

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        this.api.getFilms().subscribe(next => {
            this.list.set(next.results)
            this.isLoading.set(false)
        })
    }


}

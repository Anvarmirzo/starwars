import {Component, inject, OnInit} from '@angular/core';
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
    next = signal<string | null>(null)
    api = inject(ApiService)

    ngOnInit() {
        this.getFilms()
    }

    getFilms() {
        this.isLoading.set(true)
        this.api.getFilms(this.next()).subscribe(next => {
            this.next.set(next.next)
            this.list.set([...this.list(), ...next.results])
            this.isLoading.set(false)
        })
    }
}

import {Component, inject, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {signal} from '@angular/core';
import {IPlanets} from '../../../models/planets';
import {listAnimation} from '../../../animations/list-animation';


@Component({
    selector: 'app-planets-page',
    templateUrl: './planets-page.component.html',
    styleUrls: ['./planets-page.component.scss'],
    animations: [listAnimation]
})
export class PlanetsPageComponent implements OnInit {
    list = signal<IPlanets[]>([])
    isLoading = signal(true)
    next = signal<string | null>(null)
    api = inject(ApiService)

    ngOnInit() {
        this.getPlanets()
    }

    getPlanets() {
        this.isLoading.set(true)
        this.api.getPlanets(this.next()).subscribe(next => {
            this.next.set(next.next)
            this.list.set([...this.list(), ...next.results])
            this.isLoading.set(false)
        })
    }
}

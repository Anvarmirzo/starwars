import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {signal} from '@angular/core';
import {IPlanets} from '../../../models/planets';


@Component({
    selector: 'app-planets-page',
    templateUrl: './planets-page.component.html',
    styleUrls: ['./planets-page.component.scss']
})
export class PlanetsPageComponent implements OnInit {
    list = signal<IPlanets[]>([])
    isLoading = signal(true)

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        this.api.getPlanets().subscribe(next => {
            this.list.set(next.results)
            this.isLoading.set(false)
        })
    }
}

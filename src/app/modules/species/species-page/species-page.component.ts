import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {signal} from '@angular/core';
import {ISpecies} from '../../../models/species';


@Component({
    selector: 'app-species-page',
    templateUrl: './species-page.component.html',
    styleUrls: ['./species-page.component.scss']
})
export class SpeciesPageComponent implements OnInit {
    list = signal<ISpecies[]>([])
    isLoading = signal(true);
    next = signal<string | null>(null)

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        this.getSpecies()
    }

    getSpecies() {
        this.isLoading.set(true)
        this.api.getSpecies().subscribe(next => {
            this.next.set(next.next)
            this.list.set([...this.list(), ...next.results])
            this.isLoading.set(false)
        })
    }

}

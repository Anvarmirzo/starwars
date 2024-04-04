import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {IPeople} from '../../../models/people';
import {signal} from '@angular/core';
import {ISpecies} from '../../../models/species';


@Component({
    selector: 'app-species-page',
    templateUrl: './species-page.component.html',
    styleUrls: ['./species-page.component.scss']
})
export class SpeciesPageComponent implements OnInit {
    list = signal<ISpecies[]>([])

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        this.api.getSpecies().subscribe(next => {
            this.list.set(next.results)
        })
    }


}

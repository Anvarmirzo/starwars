import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {signal} from '@angular/core';
import {IStarships} from '../../../models/starships';


@Component({
    selector: 'app-starships-page',
    templateUrl: './starships-page.component.html',
    styleUrls: ['./starships-page.component.scss']
})
export class StarshipsPageComponent implements OnInit {
    list = signal<IStarships[]>([])
    isLoading = signal(true)
    next = signal<string | null>(null)

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        this.getStarships()
    }

    getStarships() {
        this.isLoading.set(true)
        this.api.getStarships().subscribe(next => {
            this.next.set(next.next)
            this.list.set([...this.list(), ...next.results])
            this.isLoading.set(false)

        })
    }

}

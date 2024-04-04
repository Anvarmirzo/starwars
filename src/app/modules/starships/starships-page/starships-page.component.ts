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

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        this.api.getStarships().subscribe(next => {
            this.list.set(next.results)
        })
    }


}

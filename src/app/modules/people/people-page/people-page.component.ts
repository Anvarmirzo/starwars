import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {IPeople} from '../../../models/people';
import {signal} from '@angular/core';


@Component({
    selector: 'app-people-page',
    templateUrl: './people-page.component.html',
    styleUrls: ['./people-page.component.scss']
})
export class PeoplePageComponent implements OnInit {
    list = signal<IPeople[]>([])

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        this.api.getPeople().subscribe(next => {
            this.list.set(next.results)
        })
    }


}

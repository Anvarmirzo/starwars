import {Component, HostListener, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {IPeople} from '../../../models/people';
import {signal} from '@angular/core';


@Component({
    selector: 'app-people-page',
    templateUrl: './people-page.component.html',
    styleUrls: ['./people-page.component.scss']
})
export class PeoplePageComponent implements OnInit {
    isLoading = signal(true)
    list = signal<IPeople[]>([])
    next = signal<string | null>(null)

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        this.getPeople();
    }

    getPeople() {
        this.isLoading.set(true)
        this.api.getPeople(this.next()).subscribe(next => {
            this.next.set(next.next)
            this.list.set([...this.list(), ...next.results])
            this.isLoading.set(false)
        })
    }

}

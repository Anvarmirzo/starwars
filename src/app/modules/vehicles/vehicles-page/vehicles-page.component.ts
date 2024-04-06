import {Component, inject, OnInit} from '@angular/core'
import {ApiService} from '../../../services/api.service'
import {signal} from '@angular/core'
import {IVehicles} from '../../../models/vehicles'
import {listAnimation} from '../../../animations/list-animation'


@Component({
    selector: 'app-vehicles-page',
    templateUrl: './vehicles-page.component.html',
    styleUrls: ['./vehicles-page.component.scss'],
    animations: [listAnimation]
})
export class VehiclesPageComponent implements OnInit {
    list = signal<IVehicles[]>([])
    isLoading = signal(true)
    next = signal<string | null>(null)
    api = inject(ApiService)

    ngOnInit() {
        this.getVehicles()
    }

    getVehicles() {
        this.isLoading.set(true)
        this.api.getVehicles().subscribe(next => {
            this.next.set(next.next)
            this.list.set([...this.list(), ...next.results])
            this.isLoading.set(false)
        })
    }

}

import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {signal} from '@angular/core';
import {IVehicles} from '../../../models/vehicles';


@Component({
    selector: 'app-vehicles-page',
    templateUrl: './vehicles-page.component.html',
    styleUrls: ['./vehicles-page.component.scss']
})
export class VehiclesPageComponent implements OnInit {
    list = signal<IVehicles[]>([])
    isLoading = signal(true)

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        this.api.getVehicles().subscribe(next => {
            this.list.set(next.results)
            this.isLoading.set(false)
        })
    }


}

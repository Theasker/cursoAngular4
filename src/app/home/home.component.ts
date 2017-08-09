import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})

export class HomeComponent implements OnInit{
    public titulo = 'Página principal';
    public listado_ropa: Array<string>;
    public prenda_a_guardar: string;
    public fecha;

    constructor(
        private _ropaService: RopaService
    ) {
        this.fecha = new Date(2017, 4, 15);
    }

    ngOnInit() {
        this.listado_ropa = this._ropaService.getRopa();
        console.log('this.listado_ropa: ', this.listado_ropa);
    }

    guardarPrenda() {
        if (this.prenda_a_guardar) {
                this._ropaService.addRopa(this.prenda_a_guardar);
            this.prenda_a_guardar = null;
        }
    }

    eliminarPrenda(index: number) {
        this._ropaService.deleteRopa(index)
    }
}

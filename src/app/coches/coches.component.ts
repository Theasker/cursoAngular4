import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
    selector: 'app-coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]
})

export class CochesComponent implements OnInit {
    public coche: Coche;
    public coches: Array<Coche>;
    public articulos: Array<any>;

    constructor (
        private _peticionesService: PeticionesService
    ) {
        this.coche = new Coche('', '', '');
        this.coches = [
            new Coche('Seat Panda', '120', 'Banco'),
            new Coche('Renault clio', '110', 'Azul')
        ];
    }

    ngOnInit() {
        this._peticionesService.getArticulos().subscribe(
            result => {
                this.articulos = result;
                console.log('result: ', result);

                if (!this.articulos) {
                    console.log('Error en en servidor o no hay registros.');
                }
            },
            error => {
                const errorMessage = <any>error;
                console.log('errorMessage: ', errorMessage);
            }
        );
    }

    onSubmit() {
        console.log('this.coche: ', this.coche);
        this.coches.push(this.coche);
        this.coche = new Coche('', '', '');
    }
}

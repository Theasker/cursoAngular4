import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
    private nombre_prenda: string;
    public coleccion_ropa: Array<string>;

    constructor(){
        this.nombre_prenda = 'Pantalón vaquero';
        this.coleccion_ropa = ['Pantalón Vaquero', 'Camiseta roja'];
    }

    prueba(nombre_prenda: string): string {
        this.nombre_prenda = nombre_prenda;
        return this.nombre_prenda;
    }

    addRopa(nombre_prenda: string): Array<string> {
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }

    deleteRopa(index: number): Array<string> {
        this.coleccion_ropa.splice(index, 1);
        return this.getRopa();
    }

    getRopa(): Array<string> {
        return this.coleccion_ropa;
    }

}

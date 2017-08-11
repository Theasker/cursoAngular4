import { Component } from '@angular/core';

@Component({
    selector: 'app-plantillas',
    templateUrl: './plantillas.component.html'
})

export class PlantillasComponent {
    public titulo: string;
    public administrador: boolean;

    constructor(){
        this.titulo = 'Plantillas ngTemplate en Angular4';
        this.administrador = true;
    }

    cambiar() {
        if (this.administrador){
            this.administrador = false;
        }else {
            this.administrador = true;
        }
        console.log('this.administrador: ', this.administrador);
    }

    ngOnInit(){
        
    }
}
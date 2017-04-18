import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent {
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandía';

    public nombre: string;
    public edad: number;
    public mayorDeEdad: boolean;
    public trabajos: Array<any> = ['Carpintero',3];

    comodin:any = 'Cualquier cosa';

    constructor(){
        this.nombre = 'Mauri';
        this.edad = 44;
        this.mayorDeEdad = true;
        this.comodin = 'si';
    }

    // Se carga inmediatamente después del constructor
    ngOnInit(): void {
        this.cambiarNombre();
        this.cambiarEdad(45);
        console.log(this.nombre + " " + this.edad);

        // variables y ámbito
        var uno = 8;
        var dos = 15;

        if (uno === 8){
            let uno = 3; // variable de bloque
            var dos = 88; // variable global
            console.log('Dentro del if' + uno);
        }
        console.log('Fuera del if' + uno);
    }

    cambiarNombre(){
        this.nombre = 'Juan Lopez';
    }

    cambiarEdad(edad){
        this.edad = edad;
    }
}
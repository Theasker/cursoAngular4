import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent {
    public titulo = 'Componente de empleado';
    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    public trabajador_externo: boolean;
    public color: string;
    public colorSeleccionado: string;

    constructor(){
        this.empleado = new Empleado('David Lopez', 45, 'cocinero', true);
        this.trabajadores = [
            new Empleado('Manolo Martinez', 35, 'Administrativo', false),
            new Empleado('Mauri', 35, 'programador', true),
            new Empleado('Victor Robles', 65, 'Admin', false)
        ];
        this.trabajador_externo = true;
        this.color = 'green';
        this.colorSeleccionado = '#CCC';
    }

    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor: boolean){
        this.trabajador_externo = valor;
    }

    logColorSeleccionado(){
        console.log("Color seleccionado:"+this.colorSeleccionado);
    }
}
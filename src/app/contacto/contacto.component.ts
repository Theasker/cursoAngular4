import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html'
})

export class ContactoComponent{
    public titulo = 'Página de contacto de la web';
    public parametro;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit(){
        this._route.params.forEach((params: Params )=>{
            console.log(params);
            this.parametro = params['page'];
        })
    }

    redirigir(){
        this._router.navigate(['/contacto','parametro2']);
    }

    redirigirHome(){
        this._router.navigate(['/home']);
    }
}
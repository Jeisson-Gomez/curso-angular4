import { Component } from "@angular/core";
import { Coche } from "./coche";
import { PeticionesSrvice } from "../services/peticiones.service";

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesSrvice]
})

export class CochesComponent{
    public coche: Coche;
    public coches:Array<Coche>;
    public articulos: any;

    constructor(
        private _peticionesService: PeticionesSrvice
    ){
        this.coche = new Coche("", "", "");
        this.coches = [
            new Coche("Seat Panda","120","Blanco"),
            new Coche("Renault","110","Azul")
        ];
    }

    ngOnInit(){
        this._peticionesService.getArticulos().subscribe(
            result => {
                console.log(result);
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }

    onSubmit(){
        this.coches.push(this.coche);
        this.coche = new Coche("", "", "");
    }
}
import { Component } from "@angular/core";

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_fruta = 'Naranja, Mandarina, Banano, Sandia';

    public nombre:string;
    public edad:number;
    public mayorDeEdad:boolean;
    public trabajos:Array<any> = ['Ingeniero', 44, 'Programador'];
    comodin:any;

    constructor(){
        this.nombre = 'Jeisson Gomez';
        this.edad = 33;
        this.mayorDeEdad = true;
        this.comodin = "Si"
    }

    ngOnInit(){
        this.cambiarNombre();
        this.cambiarEdad(55);
        console.log(this.nombre + " " + this.edad);

        //Variables y alcance
        var uno = 8;
        var dos = 15;

        if(uno == 8){
            let uno = 3;
            var dos = 88;

            console.log("Dentro del If: " + uno + " " + dos);
        }

        console.log("Dentro del If: " + uno + " " + dos);

    }

    cambiarNombre(){
        this.nombre = 'Jey Jey';
    }

    cambiarEdad(edad: number){
        this.edad = edad;
    }
}
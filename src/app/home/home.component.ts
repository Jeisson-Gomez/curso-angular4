import { Component } from "@angular/core";
import { ropaService } from "../services/ropa.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [ropaService]
})

export class HomeComponent{
    public titulo = 'Pagina Principal'

    constructor(){}
}
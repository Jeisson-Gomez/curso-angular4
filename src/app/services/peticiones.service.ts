import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators';


@Injectable()

export class PeticionesSrvice{
    getPrueba(){
        return 'Hola mundo desde el Servidor';
    }
}
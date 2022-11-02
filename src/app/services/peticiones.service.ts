import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';


@Injectable()

export class PeticionesSrvice{
    public url: string;

    constructor(private _http:Http){
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }

    getPrueba(){
        return 'Hola mundo desde el Servidor';
    }

    getArticulos(){
        return this._http.get(this.url).pipe(map(res => res.json()));
    }
}
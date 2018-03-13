import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient, HttpEvent, HttpParams} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {
    constructor(private http: HttpClient) {}
    
    login(data) {
        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
        }
        return this.http.post("localhost:8080/login", {"name":"sadf"},httpOptions)
            .map((data) => data);
    }


    testRequest() {
        let body = 'username=myusername?password=mypassword';
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
  
        return this.http.post('http://jsonplaceholder.typicode.com/posts', { })
            .subscribe(
                res => { console.log(res);},
                err => { console.log("Error occured");}
            );
    }

    getAlbums(){
        return this.http.get('./assets/albums.json')
            .map((res)=>res);
    }

}
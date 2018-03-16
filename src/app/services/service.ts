import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest, HttpClient, HttpEvent, HttpParams} from '@angular/common/http';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {
    headers;
    constructor(private http: HttpClient, private _http:Http) {}
    
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

    dummyRequest(){
        return this.http.get('http://localhost:8080/singleAlbum/234')
            .map((res)=>res);
    }
    getSAVInfo(){
        return this.http.get('./assets/singleAlbum.json')
            .map((res)=>res);
    }

    /**
   * Makes the HTTP request and returns an Observable
   */
  makeRequest (body): Observable<any>
   {
    let url = 'http://localhost:8080/imageUpload';
    // this.headers = new Headers();
    // //this.headers.set('Content-Type', 'application/octet-stream');
    // this.headers.set('Upload-Content-Type', body.type)
    // console.log(body);
    // let options = new RequestOptions({ headers: this.headers });
    // return this._http.post(url, body, options)
    //     .map((res) => res.json());


    let httpOptions = {
        headers: new HttpHeaders({})
    }
    return this.http.post(url,httpOptions)
        .map((data) => data);
   }


}
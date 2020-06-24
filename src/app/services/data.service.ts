import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

   constructor(private http: HttpClient) {
    }

    public getJSON(url): Observable<any> {
        return this.http.get('./../../assets/jsonData/' + url + '.json');
    }
}

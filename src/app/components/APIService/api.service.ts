import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  rootURL = 'http://192.168.254.11:8080/ServeurRESTfulAPI/api/jsonApi/result/';
  api = 'https://open.er-api.com/v6/latest/MAD';
  constructor(private http:HttpClient) { }

  public getResult(): Observable<any> {
    return this.http.get<any>(this.rootURL);
  }
  public getResultAPI(): Observable<any> {
    return this.http.get<any>(this.api);
  }
}

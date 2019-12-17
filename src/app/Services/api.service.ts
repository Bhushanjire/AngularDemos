import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constant } from 'src/app/core/Config/constant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL = constant.APIurl;
  httpOptions: any;
  constructor(
    private _httpClient: HttpClient
  ) { }

  ngOnInit() {

  }

  login(data, url) {
    return this._httpClient.post(this.URL + '' + url, data);
  }

  getRequest(url) {
    let httpHeaderOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('authToken')
      })
    };
    console.log('auth', localStorage.getItem('authToken'));

    return this._httpClient.get(this.URL + '' + url, httpHeaderOptions);
  }

  postRequest(url, data) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('authToken')
      })
    };
    return this._httpClient.post(this.URL + '' + url, data, this.httpOptions);
  }

  putRequest(url, data) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('authToken')
      })
    };
    return this._httpClient.put(this.URL + '' + url, data, this.httpOptions);
  }

  deleteRequest(url, data) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('authToken')
      })
    };
    return this._httpClient.delete(this.URL + '' + url, data);
  }

  setHeader() {

  }
}

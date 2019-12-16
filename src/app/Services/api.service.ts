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
    this.URL += url;
    return this._httpClient.post(this.URL, data);
  }

  getRequest(url) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('authToken')
      })
    };
    console.log('http',this.httpOptions);
    this.URL += url;
    return this._httpClient.get(url, this.httpOptions);
  }

  postRequest(url, data) {
    this.URL += url;
    return this._httpClient.post(url, data, this.httpOptions);
  }

  putRequest(url, data) {
    this.URL += url;
    return this._httpClient.put(url, data, this.httpOptions);
  }

  deleteRequest(url, data) {
    this.URL += url;
    return this._httpClient.delete(url, data);
  }

  setHeader() {
   
  }
}

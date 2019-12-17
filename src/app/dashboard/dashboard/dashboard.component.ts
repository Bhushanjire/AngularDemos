import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../Services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _apiService : ApiService) { }

  ngOnInit() {

    this._apiService.getRequest('loggedInUser').subscribe((responce : any)=>{

      console.log('responce',responce);
      
    });

  }

  logout(){

  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../../Services/api.service';
import { IResponse } from '../../core/Config/constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _apiService: ApiService,
    private _router: Router) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  login(formData) {
    let postData = {
      username: formData.value.username,
      password: formData.value.password
    }
    this._apiService.login(postData, 'login').subscribe((responce: IResponse) => {
      if (responce.data) {
        localStorage.setItem('authToken', responce.data.token);
        this._router.navigate(['/dashboard']);
        console.log('logined');

        this._apiService.getRequest('allUsers').subscribe((responce:any) => {

          console.log('alluser',responce);
          
        });

      } else {
      }
    });
  }
}

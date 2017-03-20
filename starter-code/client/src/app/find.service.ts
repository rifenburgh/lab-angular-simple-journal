import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router'

@Injectable()
export class FindService {
  BASE_URL: string = 'http://localhost:3000';
  item: Object;
  constructor(
    private myHttp: Http,
    private myFind: FindService
  ) { }
  getList() {
    return this.myHttp.get(`${this.BASE_URL}/api/journals`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
  getItem(id) {
    return this.myHttp.get(`${this.BASE_URL}/api/phones/${id}`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
}

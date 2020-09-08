import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  URL = "http://localhost:3000/resto";
  registerURL = "http://localhost:3000/users";

  constructor(private _http : HttpClient) { }

  registerResturant (data : Object ){
    return this._http.post(this.registerURL,data);
  }

  getResturantList(){
 return this._http.get(this.URL);
  }

  addResturant(data : Object) :Observable<Object>{
    return this._http.post(this.URL,data)
  }

  deleteResturant(id : number) {
    return this._http.delete(`${this.URL}/${id}`)
  }

  getResturant(id): Observable<any> {
    return this._http.get(`${this.URL}/${id}`)
  }

  updateResturant(id:number,value :any): Observable<any> {
    return this._http.put(`${this.URL}/${id}`,value)
  }


}

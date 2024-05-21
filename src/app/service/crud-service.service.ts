import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customer } from '../customer';
import { Observable } from 'rxjs';
const BASE_URL = "http://localhost:8089/api"
@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(
    private http: HttpClient
  ) { }

  postCustomer(customer: customer){
    return this.http.post(BASE_URL + "/customer", customer);
  }

  getCustomer():Observable<any>{
    return this.http.get(BASE_URL + "/AllCustomer");
  }

  getCustomerById(id:number):Observable<any>{
    return this.http.get(BASE_URL + "/customer/" + id);
  }

  UpdateCustomer(id: number, custom:customer):Observable<any>{
    return this.http.put(BASE_URL + "/updateCustomer/" + id, custom);
  }

  DeleteCustomer(id:number){
    return this.http.delete(BASE_URL + "/deleteCustomer/" + id);
  }
}

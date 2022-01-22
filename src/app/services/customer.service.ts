import { Customer } from './../models/customer';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44313/api/customers/"
  constructor(private httpClient:HttpClient) { }
  getCustomers():Observable<ListResponseModel<Customer>>{
    let fullPath=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Customer>>(fullPath);

  }
  getCustomerById(userId:number):Observable<SingleResponseModel<Customer>>{

    let fullPath=this.apiUrl+"getbyid?id="+userId;
    return this.httpClient.get<SingleResponseModel<Customer>>(fullPath);

  }
}

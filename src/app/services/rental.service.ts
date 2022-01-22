import { RentalResponse } from './../models/rentalResponse';
import { HttpClient } from '@angular/common/http';
import { Rental } from './../models/rental';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44313/api/rentals/"

  constructor(private httpClient:HttpClient) { }

  getCarRentFull():Observable<ListResponseModel<RentalResponse>>{

    let fullPath=this.apiUrl+"getcarrentfull";

    return this.httpClient.get<ListResponseModel<RentalResponse>>(fullPath);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl="https://localhost:44313/api/";
  constructor(private httpClient:HttpClient) { }


  getCarImages():Observable<ListResponseModel<CarImage>>{

    let fullUrl=this.apiUrl+"carimages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(fullUrl);

  }



  getByCarId(carId:number):Observable<ListResponseModel<CarImage>>{

    let fullUrl=this.apiUrl+"carimages/getbycarid/?id="+ carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(fullUrl);

  }

}

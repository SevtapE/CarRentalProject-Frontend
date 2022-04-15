import { Car } from './../models/car';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44313/api/cars/";
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{

    let fullUrl=this.apiUrl+"getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(fullUrl);

  }


  getCarDetailsByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>>{

    let fullUrl=this.apiUrl+"getcardetailsbybrandid/?id="+ brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(fullUrl);

  }

  getCarDetailsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>>{

    let fullUrl=this.apiUrl+"getcardetailsbycolorid/?id="+ colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(fullUrl);

  }


  getCarDetailsByCarId(carId:number):Observable<SingleResponseModel<CarDetail>>{

    let fullUrl=this.apiUrl+"getcardetailbycarid/?id="+ carId;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(fullUrl);

  }

  //Cars without details
  getCars():Observable<ListResponseModel<Car>>{

    let fullUrl=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Car>>(fullUrl);

  }

  getById(carId:number):Observable<SingleResponseModel<Car>>{

    let fullUrl=this.apiUrl+"getbyid/?id="+ carId;
    return this.httpClient.get<SingleResponseModel<Car>>(fullUrl);

  }


}

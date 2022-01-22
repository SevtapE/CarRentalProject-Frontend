import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44313/api/brands/";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let fullUrl=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Brand>>(fullUrl);
  }
  getById(brandId:number):Observable<SingleResponseModel<Brand>>{

    let fullUrl=this.apiUrl+"getbyid/?id="+ brandId;
    return this.httpClient.get<SingleResponseModel<Brand>>(fullUrl);

  }
}

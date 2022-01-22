import { Color } from './../models/color';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44313/api/colors/getall"

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }
}

import { CarService } from './../../services/car.service';
import { CarDetail } from './../../models/carDetail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  carDetails: CarDetail[] = [];
  currentCarDetail:CarDetail;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["brandId"]) {
        this.getCarDetailsByBrandId(params["brandId"])
      } else if (params['colorId']) {
        this.getCarDetailsByColorId(params["colorId"])
      } else {
        this.getCarDetails();
      }
    });
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  getCarDetailsByBrandId(brandId: number) {
    this.carService.getCarDetailsByBrandId(brandId).subscribe((response) =>
     {
      this.carDetails = response.data
    });
  }
  getCarDetailsByColorId(brandId: number) {
    this.carService.getCarDetailsByColorId(brandId).subscribe((response) =>
     {
      this.carDetails = response.data
    });
  }

  setCurrentCarDetail(carDetail:CarDetail){
    this.currentCarDetail=carDetail;
    console.log(this.currentCarDetail.carId)

  }



}

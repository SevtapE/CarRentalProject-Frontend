import { CarService } from './../../services/car.service';
import { CarDetail } from './../../models/carDetail';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetails:CarDetail[]=[];

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data;
    })

  }

}

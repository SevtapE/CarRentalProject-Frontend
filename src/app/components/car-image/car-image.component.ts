import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  carImages:CarImage[]=[];
  currentCarImage:CarImage;
  constructor(private carImageService:CarImageService, private activatedRoute: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {

      if (params["carId"]) {
        this.getByCarId(params["carId"])
      }

      // else{
      //   this.getCarImages();
      // }
    });
  }
  getCarImages() {
    this.carImageService.getCarImages().subscribe((response) => {
      this.carImages = response.data;
    });
  }



  getByCarId(carId: number) {
    this.carImageService.getByCarId(carId).subscribe((response) =>
     {
      this.carImages = response.data

    });
  }

 setCurrentCarImage(imagePath:string){


  return "https://localhost:44313"+imagePath;

 }


}

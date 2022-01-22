import { RentalResponse } from './../../models/rentalResponse';
import { CarDetail } from './../../models/carDetail';
import { CustomerService } from './../../services/customer.service';
import { CarService } from './../../services/car.service';
import { RentalService } from './../../services/rental.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: RentalResponse[] = [];
  customers: Customer[] = [];
  carDetails: CarDetail[] = [];

  constructor(
    private rentalService: RentalService,
    private carService: CarService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals() {
    this.rentalService.getCarRentFull().subscribe((response) => {
      this.rentals = response.data;
    });
  }
}

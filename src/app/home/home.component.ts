import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private dataService: MockDataService) {}

  ngOnInit(): void {
    this.products = this.dataService.getProducts();
  }
}
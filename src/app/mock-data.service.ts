import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  getProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'Mobile Phone 1',
        brand: 'Brand A : Samsung',
        price: 499.99,
        description: 'A great mobile phone with amazing features.',
        imageUrl: 'https://th.bing.com/th/id/OIP.DJT2Hnp39albuRZkN4cE7AHaEK?w=252&h=180&c=7&r=0&o=5&pid=1.7',
      },
      {
        id: 1,
        name: 'Mobile Phone 2',
        brand: 'Brand iphone',
        price: 399.99,
        description: 'A great mobile phone with amazing features.',
        imageUrl: 'https://th.bing.com/th/id/OIP.q6VV5v7p5aOXyxbrFa5X_wHaEK?w=269&h=180&c=7&r=0&o=5&pid=1.7',
      },
      {
        id: 1,
        name: 'Mobile Phone 3',
        brand: 'Brand  shiaoumi',
        price: 599.99,
        description: 'A great mobile phone with amazing features.',
        imageUrl: 'https://th.bing.com/th/id/OIP.mNsx1IQN3pWSrtAYIn4SnQHaD4?w=311&h=180&c=7&r=0&o=5&pid=1.7',
      },
      // Add more products as needed
    ];
  }
}
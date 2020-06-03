import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customer: any;

  constructor() { }

  ngOnInit() {
    // called service/store

    this.customer = {
      name: 'James Doe',
      address: {
        city: 'Phoenix'
      }
    };
  }

  onChanged(customer: any) {
    this.customer = customer;
  }
}

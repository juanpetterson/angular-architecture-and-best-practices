import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customer: any;
  @Output() customerChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.customer.name = 'Gina Doe';

    setTimeout(() => {
      this.customer.name = 'Tina Doe';
    }, 2000);
  }

  onChange() {
    this.customer.name = 'Michelle Doe';
    this.customerChanged.emit(this.customer);
  }

}

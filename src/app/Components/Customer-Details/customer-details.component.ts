import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnChanges {

  @Input() currentCustomerDeatils: any;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.currentCustomerDeatils = changes.currentCustomerDeatils.currentValue;
  }
  ngOnInit() {
  }

}

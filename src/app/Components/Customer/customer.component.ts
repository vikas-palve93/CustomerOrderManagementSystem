import { Component, OnInit } from '@angular/core';
import { customers } from '../../Util/constants';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerList: any = customers;
  isOrderDetailsShow = false;
  isCustomerDetailsShow = false;
  isButtonPannelShow = false;
  currentCustomerDeatils: any;

  constructor(
  ) { }

  ngOnInit() {

  }
  showCustDetails(currentCustomerDeatils) {
    this.currentCustomerDeatils = currentCustomerDeatils;
    this.isCustomerDetailsShow = true;
    this.isOrderDetailsShow = false;
  }

  showOrderDetails(currentCustomerDeatils) {
    this.currentCustomerDeatils = currentCustomerDeatils;
    this.isCustomerDetailsShow = false;
    this.isOrderDetailsShow = true;
  }

  addNewCustomer(customerData: any) {
    customerData.cust_id = this.customerList.length + 1;
    this.customerList.push(customerData)
  }

  deleteCustomer(i) {
    console.log(i);
    for (let j = 0; j < this.customerList.length; j++) {
      if (this.customerList[j].cust_id === i) {
        this.customerList.splice(j, 1);
        this.isOrderDetailsShow = false;
        this.isCustomerDetailsShow = false;
        this.isButtonPannelShow = false;
        break;
      }
    }
  }

}

import { Component, OnInit, TemplateRef  } from '@angular/core';
import { customers } from '../../Util/constants';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerList:any = customers;
  isOrderDetailsShow = false;
  isCustomerDetailsShow = false;
  isButtonPannelShow = false;
  currentCustomerDeatils: any;

  modalRef: BsModalRef;
  message: string;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  addNewCustomer(customerData:any){
    customerData.cust_id = this.customerList.length  + 1;
    this.customerList.push(customerData)
  }

  deleteCustomer(i){
    console.log(i);
    for(let j=0;j< this.customerList.length; j++){
      if(this.customerList[j].cust_id === i){
        this.customerList.splice(j,1);
        this.isOrderDetailsShow = false;
        this.isCustomerDetailsShow = false;
        this.isButtonPannelShow = false;
        break;
      }
    }
  }

   
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    for(let j=0;j< this.customerList.length; j++){
      if(this.customerList[j].cust_id === this.currentCustomerDeatils.cust_id){
        this.customerList.splice(j,1);
        this.isOrderDetailsShow = false;
        this.isCustomerDetailsShow = false;
        this.isButtonPannelShow = false;
        break;
      }
    }
    this.modalRef.hide();
  }
 
  decline(): void {
    this.modalRef.hide();
  }

}

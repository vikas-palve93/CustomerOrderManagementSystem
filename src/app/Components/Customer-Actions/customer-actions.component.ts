import { Component, OnInit, Input, SimpleChanges, OnChanges, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'angular-web-storage';


@Component({
  selector: 'app-customer-actions',
  templateUrl: './customer-actions.component.html',
  styleUrls: ['./customer-actions.component.css']
})
export class CustomerActionsComponent implements OnInit, OnChanges {

  @Input() currentCustomerDeatils: any;
  @Output() customerDetailsEvent = new EventEmitter<Event>();
  @Output() customerOrderEvent = new EventEmitter<Event>();
  @Output() deleteCustomerEvent = new EventEmitter<Event>();

  modalRef: BsModalRef;
  message: string;

  constructor(
    private modalService: BsModalService,
    private localStorage: LocalStorageService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    this.currentCustomerDeatils = changes.currentCustomerDeatils.currentValue;

  }

  ngOnInit() {
  }

  showCustomerDetails(isCustomerDetails) {
    console.log(isCustomerDetails);

    if (isCustomerDetails)
      this.customerDetailsEvent.emit(this.currentCustomerDeatils);
    else
      this.customerOrderEvent.emit(this.currentCustomerDeatils);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.deleteCustomerEvent.emit(this.currentCustomerDeatils);
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }
}

import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from "jquery";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  @Input() addCustomerModel:any;
  @Output() addCustomerEvent = new EventEmitter<string>();
  registerForm: FormGroup;
  submitted = false;
  isCollapsed = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      cust_name: ['', Validators.required],
      cust_contact: ['', Validators.required],
      cust_address: ['', Validators.required],
  });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      else{
        this.addCustomerEvent.emit(this.registerForm.value)
        this.addCustomerModel.hide();
        $("#addCustomerForm").trigger('reset');
        this.registerForm.untouched;
      }

  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}

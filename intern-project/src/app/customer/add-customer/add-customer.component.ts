import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddConfirmComponent } from '../add-confirm/add-confirm.component';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit{
  public genders: string[] = ["Male","Female"];
  public addCustomer!:FormGroup;
  public customerIDNew!: number;
  public checkUpdate: boolean = false;

  constructor(private fb:FormBuilder, private api:CustomerService, private activatedRoute:ActivatedRoute, private route: Router, public dialog:MatDialog){}

  ngOnInit(): void {
    // create add form element and its validators
    this.addCustomer = new FormGroup({
      fullname: new FormControl(null,Validators.required),
      dob: new FormControl(null,Validators.required),
      gender: new FormControl(null, Validators.required),
      address: new FormControl(null,Validators.required),
      email: new FormControl(null,Validators.email),
      phone: new FormControl(null,Validators.maxLength(10) && Validators.minLength(10))
    })
      
    // route to update customer by id which is formed before
    this.activatedRoute.params.subscribe(val=>{
      this.customerIDNew = val['id'];
      this.api.getById(this.customerIDNew).subscribe(res=>{
        this.checkUpdate = true;
        this.fillFormToUpdate(res);
      })
    })
  }

  add(){
    this.api.add(this.addCustomer.value).subscribe(res=>{
      this.addCustomer.reset();
      this.dialog.open(AddConfirmComponent,{
        width: '250px',
      });
    })
  }

  update(){
    this.api.updateCus(this.addCustomer.value, this.customerIDNew).subscribe(res=>{
      this.route.navigate(['list']);
      this.addCustomer.reset();
      this.dialog.open(AddConfirmComponent,{
        width: '250px',
      });
    })
  }

  fillFormToUpdate(customer:Customer){
    this.addCustomer.setValue({
      fullname: customer.fullname,
      dob:customer.dob,
      gender: customer.gender,
      address: customer.address,
      email: customer.email,
      phone: customer.phone
    })
  }

}

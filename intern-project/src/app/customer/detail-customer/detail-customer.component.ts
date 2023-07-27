import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.scss']
})
export class DetailCustomerComponent implements OnInit{
  public cusID!: number;
  customer!: Customer;

  constructor(private activedRoute: ActivatedRoute, private cusService: CustomerService){}

  ngOnInit(): void {
    this.activedRoute.params.subscribe(value=>{
      this.cusID = value['id'];
      this.pickCustomer(this.cusID);
    })
  }

  pickCustomer(cusID: number){
     this.cusService.getById(cusID).subscribe(res=>{
      this.customer = res;
     })
  }

}

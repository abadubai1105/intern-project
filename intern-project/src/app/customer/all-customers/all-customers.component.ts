import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.scss']
})
export class AllCustomersComponent implements OnInit {
  allCustomers:Customer[] = []; 

  constructor(private customerService:CustomerService){}

  ngOnInit(): void {
    this.getAPI();
  }

  getAPI(){
    this.customerService.get().subscribe((data)=>{
      this.allCustomers = data;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { PageEvent } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.scss']
})
export class AllCustomersComponent implements OnInit {
  allCustomers:Customer[] = []; 
  searchControl = new FormControl('');
  pageIndex: number = 0;
  pageSize: number = 5;
  totalRecords: number = 0;

  constructor(private customerService:CustomerService){}

  ngOnInit(): void {
    this.getAPI('');
  }

  getAPI(key:string){
    this.customerService.searchCus(key, (this.pageIndex + 1), this.pageSize).subscribe((response)=>{
      this.allCustomers = response.body as Customer[];
      this.totalRecords = response.headers.get('X-Total-Count') ? Number(response.headers.get('X-Total-Count')) : 0;
    })
  }

  textSearch(){
    this.getAPI(this.searchControl.value ?? '');
  }

  checkGender(gender: string){
     if (gender == "Male" || gender == "male"){
      return true;
     }
     return false;
  }

  paginatorEvent(e: PageEvent){
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.getAPI(this.searchControl.value ?? '');
  }
}

import { Component, ViewChild, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCustomerComponent } from '../delete-customer/delete-customer.component';


@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit{
  public customers!: Customer[];
  public dataSource!: MatTableDataSource<Customer>;
  list:Customer[] = [];


  displayedColumns: string[] = ['id', 'fullname','dob','gender','address','email','phone','btn'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor(private api:CustomerService, private route:Router, private dialog:MatDialog){}

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(){
    this.api.get().subscribe(res =>{
      this.customers = res;
      this.dataSource = new MatTableDataSource(this.customers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateCustomer(id: number){
    this.route.navigate(['update',id]); //choose the id of customer then add to the router
  }

  deleteCustomer(id: number) {
    const dialogRef = this.dialog.open(DeleteCustomerComponent,{
      width: '250px',
      data:{id}
    });

    dialogRef.afterClosed().subscribe((result)=>{
      if(result){
        this.list = this.list.filter(_=>_.id !== result);
        this.getCustomer();
      }
    })
  }
}

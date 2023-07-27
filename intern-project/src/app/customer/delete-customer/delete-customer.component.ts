import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent {
  
  constructor(public dialogRef: MatDialogRef<DeleteCustomerComponent>, private cusService: CustomerService, @Inject(MAT_DIALOG_DATA) public data:any){}

  acceptDelete(){
    this.cusService.deleteCus(this.data.id).subscribe(()=>{
      this.dialogRef.close(this.data.id);
    })
  }
}

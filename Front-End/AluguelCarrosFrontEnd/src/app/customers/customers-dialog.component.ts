import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from '../models/custumer.model';


@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customers-dialog.component.html',
})
export class CustomerDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

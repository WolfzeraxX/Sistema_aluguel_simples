import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from '../models/car.model';


@Component({
  selector: 'app-car-dialog',
  templateUrl: './cars-dialog.component.html',
})
export class CarDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

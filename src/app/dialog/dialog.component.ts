import { Component } from '@angular/core';
import { MatDialogRef, MatBottomSheet } from '@angular/material';

import { BottomComponent } from '../bottom/bottom.component';

@Component({
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css']
})
export class DialogComponent {

  constructor(public dialogRef: MatDialogRef<DialogComponent>, private bottomSheet: MatBottomSheet) { }

  openMiner() {
    //show: boolean = true;
    this.dialogRef.close();
    console.log('openMiner ran');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

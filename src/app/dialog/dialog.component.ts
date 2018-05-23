import { Component } from '@angular/core';
import { MatDialogRef, MatBottomSheet } from '@angular/material';
import { BottomComponent } from '../bottom/bottom.component';
import { MinerService } from '../miner.service';
import { MinerName } from '../minerName';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// declare var minerName: any;

@Component({
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css']
})
export class DialogComponent {

  minerName: string;

  // tslint:disable-next-line:max-line-length
  constructor(public dialogRef: MatDialogRef<DialogComponent>, private bottomSheet: MatBottomSheet, private miner: MinerService, public http: HttpClient) { }

  model = new MinerName();
  handleError = 'Post Error';

  openMiner() {
    this.saveName();
     this.miner.startMiner();
    this.dialogRef.close();
    console.log('openMiner ran');
  }

  saveName() {
    this.model.minerName = this.minerName;
    console.log(this.model);
    // send to DB
    return this.http.post('mongodb://localhost:27017', JSON.stringify(this.model)).subscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

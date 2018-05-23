import { Component } from '@angular/core';
import { MatDialogRef, MatBottomSheet } from '@angular/material';
import { BottomComponent } from '../bottom/bottom.component';
import { MinerService } from '../miner.service';
import { MinerName } from '../minerName';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Component({
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css']
})
export class DialogComponent {

  name: string;

  constructor(public dialogRef: MatDialogRef<DialogComponent>, private bottomSheet: MatBottomSheet, private miner: MinerService, public http: HttpClient) { }

  model = new MinerName();
  handleError = 'Post Error';

  openMiner() {
    this.saveName();
     this.miner.startMiner();
    this.dialogRef.close();
    console.log('openMiner ran');
  }

  saveName(){
    this.model.name = this.name;
    console.log(this.model);
    // send to DB
    return this.http.post('localhost:27017', JSON.stringify(this.model)).subscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

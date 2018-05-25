import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DialogComponent } from './dialog/dialog.component';

import { MinerService } from './miner.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hashesPerSecond: any;
  totalHashes: any;
  acceptedHashes: any;

  constructor(private dialog: MatDialog, private miner: MinerService) {
    this.hashesPerSecond = miner.hashesPerSecond;
    this.totalHashes = miner.totalHashes;
    this.acceptedHashes = miner.acceptedHashes;
  }

  minePrompt() {
    this.dialog.open(DialogComponent);
    console.log('minePrompt ran');
  }

}

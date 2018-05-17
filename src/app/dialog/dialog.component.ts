import { Component } from '@angular/core';
import { MatDialogRef, MatBottomSheet } from '@angular/material';

import { BottomComponent } from '../bottom/bottom.component';

declare var CoinHive: any;

@Component({
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css']
})
export class DialogComponent {

  constructor(public dialogRef: MatDialogRef<DialogComponent>, private bottomSheet: MatBottomSheet) { }

  startMiner() {
    var miner = new CoinHive.Anonymous('WbWeCFFLVH6mLfn3OYt48oXvUhGiwj2j', {throttle: 0.3});
    if (!miner.isMobile() && !miner.didOptOut(14400)) {
      miner.start();
    }
    console.log('Coinhive miner started');
  }

}

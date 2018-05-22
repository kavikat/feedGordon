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

  openMiner() {
    const miner = new CoinHive.Anonymous('WbWeCFFLVH6mLfn3OYt48oXvUhGiwj2j', { throttle: 0.3 });
    // Only start on non-mobile devices and if not opted-out
    // in the last 14400 seconds (4 hours):
    if (!miner.isMobile() && !miner.didOptOut(14400)) {
      miner.start();
    }
    miner.on('found', function () { /* Hash found */ });
    miner.on('accepted', function () { /* Hash accepted by the pool */ });
    // Update stats once per second
    setInterval(function () {
      const hashesPerSecond = miner.getHashesPerSecond(),
                totalHashes = miner.getTotalHashes(),
             acceptedHashes = miner.getAcceptedHashes();
      // Output to HTML elements...
      console.log(hashesPerSecond);
      console.log(hashesPerSecond);
      console.log(hashesPerSecond);
    }, 1000);
    this.dialogRef.close();
    console.log('openMiner ran');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

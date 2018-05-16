import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feed Gordon!';
    /*startMine() {
      var miner = new CoinHive.Anonymous('YOUR_SITE_KEY', {throttle: 0.3});

      // Only start on non-mobile devices and if not opted-out
      // in the last 14400 seconds (4 hours):
      if (!miner.isMobile() && !miner.didOptOut(14400)) {
        miner.start();
      }
    }*/
}

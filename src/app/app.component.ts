import { Component } from '@angular/core';

import { BottomComponent } from './bottom/bottom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feed Gordon!';

  minePrompt() {
    console.log('minePrompt ran');
  }

}

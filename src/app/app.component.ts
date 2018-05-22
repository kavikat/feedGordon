import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DialogComponent } from './dialog/dialog.component';

declare var miner: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MatDialog) {}

  minePrompt() {
    this.dialog.open(DialogComponent);
    console.log('minePrompt ran');
  }

}

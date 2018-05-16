import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  templateUrl: 'bottom.component.html',
  styleUrls: ['bottom.component.css']
})
export class BottomComponent {

  constructor(public bottomSheetRef: MatBottomSheetRef<BottomComponent>) { }

}

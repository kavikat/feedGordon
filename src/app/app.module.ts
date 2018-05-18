import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BottomComponent } from './bottom/bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatDialogModule,
    MatBottomSheetModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [BottomComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

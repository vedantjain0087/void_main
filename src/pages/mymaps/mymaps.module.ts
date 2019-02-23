import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MymapsPage } from './mymaps';

@NgModule({
  declarations: [
    MymapsPage,
  ],
  imports: [
    IonicPageModule.forChild(MymapsPage),
  ],
})
export class MymapsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestnggroupPageRoutingModule } from './testnggroup-routing.module';

import { TestnggroupPage } from './testnggroup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestnggroupPageRoutingModule
  ],
  declarations: [TestnggroupPage]
})
export class TestnggroupPageModule {}

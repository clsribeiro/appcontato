import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovocontatoPageRoutingModule } from './novocontato-routing.module';

import { NovocontatoPage } from './novocontato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovocontatoPageRoutingModule
  ],
  declarations: [NovocontatoPage]
})
export class NovocontatoPageModule {}

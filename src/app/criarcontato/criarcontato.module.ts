import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarcontatoPageRoutingModule } from './criarcontato-routing.module';

import { CriarcontatoPage } from './criarcontato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarcontatoPageRoutingModule
  ],
  declarations: [CriarcontatoPage]
})
export class CriarcontatoPageModule {}

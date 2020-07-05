import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CriarcontatoPageRoutingModule } from './criarcontato-routing.module';
import { CriarcontatoPage } from './criarcontato.page';
import { Contato } from '../contatos/shared/contato';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarcontatoPageRoutingModule
  ],
  declarations: [CriarcontatoPage],
  providers: [Contato]})
export class CriarcontatoPageModule {}

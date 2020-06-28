import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarcontatoPage } from './criarcontato.page';

const routes: Routes = [
  {
    path: '',
    component: CriarcontatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarcontatoPageRoutingModule {}

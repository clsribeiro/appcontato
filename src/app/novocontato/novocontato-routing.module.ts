import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovocontatoPage } from './novocontato.page';

const routes: Routes = [
  {
    path: '',
    component: NovocontatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovocontatoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestnggroupPage } from './testnggroup.page';

const routes: Routes = [
  {
    path: '',
    component: TestnggroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestnggroupPageRoutingModule {}

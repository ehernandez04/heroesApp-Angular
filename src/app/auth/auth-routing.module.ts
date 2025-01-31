import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

// localhots:4200/auth/
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class AuthRoutingModule { }

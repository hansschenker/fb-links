import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinksComponent } from './links.component';
import { LinkListComponent } from './components/link-list/link-list.component';

const routes: Routes = [
  {
    path: '',
    component: LinksComponent,
    children: [{ path: 'list', component: LinkListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinksRoutingModule {}

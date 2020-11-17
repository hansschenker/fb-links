import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// links
import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { LinkFormComponent } from './components/link-form/link-form.component';
import { LinkItemComponent } from './components/link-item/link-item.component';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    LinksComponent,
    LinkListComponent,
    LinkFormComponent,
    LinkItemComponent,
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    LinksRoutingModule,
  ],
  exports: [
    LinksComponent,
    LinkListComponent,
    LinkFormComponent,
    LinkItemComponent,
  ],
})
export class LinksModule {}

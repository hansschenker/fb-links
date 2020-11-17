import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// app
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinksModule } from './links/links.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, LinksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

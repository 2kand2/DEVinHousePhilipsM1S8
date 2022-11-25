import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListGroupItemComponent } from './components/list-group-item/list-group-item.component';
import { HeaderComponent } from './components/header/header.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ListGroupItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

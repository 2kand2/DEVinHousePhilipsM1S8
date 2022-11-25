import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListGroupItemComponent } from './components/list-group-item/list-group-item.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ListGroupItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent} from './cart.component';
import { UserComponent} from './user.component';

@NgModule({
  declarations: [
    AppComponent, CartComponent, UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { InvestorCardComponent } from './component/investor-card/investor-card.component';
import { ListStartupComponent } from './component/list-startup/list-startup.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestorCardComponent,
    ListStartupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

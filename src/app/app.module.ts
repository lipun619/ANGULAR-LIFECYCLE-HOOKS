import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HookComponent } from './hook/hook.component';
import { HookChildComponent } from './hook/hook-child/hook-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HookComponent,
    HookChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

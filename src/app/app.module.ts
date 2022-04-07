import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ContainerItemComponent } from './container-item/container-item.component';
import { ContainerImgComponent } from './container-img/container-img.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContainerItemComponent,
    ContainerImgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

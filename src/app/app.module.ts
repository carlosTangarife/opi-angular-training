import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerImgComponent } from './container-img/container-img.component';
import { ContainerItemComponent } from './container-item/container-item.component';
import { ContainerComponent } from './container/container.component';
import { TokenService } from './interceptors/token.service';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContainerItemComponent,
    ContainerImgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerImgComponent } from './container-img/container-img.component';
import { ContainerItemComponent } from './container-item/container-item.component';
import { ContainerComponent } from './container/container.component';
import { TokenService } from './interceptors/token.service';
import { GREETING_PROVIDER } from './services/greeting-strategy/greeting-provider';
import { INotify } from './services/notify/notify';
import { NotifyAlertService } from './services/notify/notify-alert.service';

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
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true},
    ...GREETING_PROVIDER,
    {provide: INotify, useClass: NotifyAlertService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

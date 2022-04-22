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
import { AdDirective } from './shared/directives/ad.directive';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdComponent } from './ad/ad.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContainerItemComponent,
    ContainerImgComponent,
    AdDirective,
    HeroProfileComponent,
    AdComponent,
    InputComponent,
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

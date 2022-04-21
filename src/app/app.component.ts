import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Component, OnInit, ViewChild } from '@angular/core';

import { ContainerImgComponent } from './container-img/container-img.component';
import { AdItem } from './models/ad-item';
import { IData } from './models/data.model';
import { AdService } from './services/ad.service';
import { DataService } from './services/data.service';
import { GreetingStrategyService } from './services/greeting-strategy/greeting-strategy.service';
import { GreetingType } from './services/greeting-strategy/greeting-type';
import { INotify } from './services/notify/notify';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data$!: Observable<Array<IData>>;

  data3$!: Observable<any>;
  ads: AdItem[] = [];

  @ViewChild("containerImgComponentRef")
  containerImgComponentRef!: ContainerImgComponent;

  constructor(
    private readonly dataService: DataService,
    private readonly themeService: ThemeService,
    private readonly _greetingStrategyService: GreetingStrategyService,
    private readonly notifyService: INotify,
    private readonly adService: AdService
    ) {
  }

  ngOnInit(): void {

    this.ads = this.adService.getAds();
    //https://www.youtube.com/watch?v=fYd3sBD2-W8
    //https://www.jasoft.org/Blog/post/como-cambiar-los-valores-de-variables-css-desde-codigo-javascript
    // get configurations color by especific client.
    setTimeout(() => {
      const { defaul, custome } = this.themeService.getTheme();
      const setVariableCss = ([key, value]: [string, string]): void => document.documentElement.style.setProperty(`--${key}`, value);

      if (!!custome || !!defaul) {
        Object.entries(custome || defaul).forEach(setVariableCss);
      }

    }, 0);

    this.data$ = this.dataService.getData().pipe(
      delay(100),
      map((data: IData[]) => {
        return data.map(x => ({
          ...x,
          title: x.title.toUpperCase(),
        }))
      })
    );

    this.data3$ = this.dataService.getData3();
  }

  clicked(): void {
    this.containerImgComponentRef.saludar();
  }

  sayHey(): void {
    try {
      debugger;
      this._greetingStrategyService.sayHey(GreetingType.BOLIVIAN);
    } catch (error) {
      alert(error);
    }
  }

  notify(): void {
    this.notifyService.success();
  }
}

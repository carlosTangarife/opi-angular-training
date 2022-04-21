import {
    Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild
} from '@angular/core';

import { AdDirective } from '../directives/ad-directive';
import { AdItem } from '../models/ad-item';
import { AdComponent } from '../models/ad.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  interval!: number;

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver){

  }
  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentFactory =  this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    // @ts-ignore
    const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory);
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    // @ts-ignore
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}

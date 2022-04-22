import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';

import { AdItem } from '../models/ad-item';
import { IAd } from '../models/ad.model';
import { AdDirective } from '../shared/directives/ad.directive';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {
  @Input()
  ads!: Array<AdItem>;

  @ViewChild(AdDirective, { static: true })
  adHost!: AdDirective;

  intervalRef: any;

  currentIndex = -1;

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver){}

  ngOnInit(): void {
    this.printComponent();
    this.getRandomAds();
  }

  printComponent(): void {
    this.currentIndex = (this.currentIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentIndex];
    this.adHost.viewContainerRef.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem._class);
    const containerRef = this.adHost.viewContainerRef.createComponent<IAd>(componentFactory);
    containerRef.instance.data = adItem.data;
  }

  getRandomAds() {
    this.intervalRef = setInterval(() => {
      this.printComponent();
    }, 3000);
  }
}

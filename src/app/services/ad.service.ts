import { Injectable } from '@angular/core';

import { HeroProfileComponent } from '../hero-profile/hero-profile.component';
import { InputComponent } from '../input/input.component';
import { AdItem } from '../models/ad-item';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  getAds(): Array<AdItem>{
    return [
      new AdItem(HeroProfileComponent, {name: 'carlos', age: 36}),
      new AdItem(InputComponent, {label: 'andres', value: 37}),
      new AdItem(HeroProfileComponent, {name: 'andres', age: 50}),
      new AdItem(InputComponent, {label: 'compras', value: 57000}),
      new AdItem(HeroProfileComponent, {name: 'felipe', age: 40}),
    ]
  }
}

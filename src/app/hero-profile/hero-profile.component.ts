import { Component, Input } from '@angular/core';

import { IAd } from '../models/ad.model';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
})
export class HeroProfileComponent implements IAd {
  @Input()
  data!: {name: string, age: number};
}

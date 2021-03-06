import { Component, Input } from '@angular/core';

import { AdComponent } from '../models/ad.component';

@Component({
  selector: 'app-hero-job',
  templateUrl: './hero-job.component.html',
  styleUrls: ['./hero-job.component.css']
})
export class HeroJobComponent implements AdComponent {
  @Input() data: any;
}

import { Component } from '@angular/core';

import { IAd } from '../models/ad.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements IAd {
  data: any;
}

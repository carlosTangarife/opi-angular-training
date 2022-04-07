import { Component, Input, OnInit } from '@angular/core';

import { IData } from '../models/data.model';

@Component({
  selector: 'app-container-item',
  templateUrl: './container-item.component.html',
  styleUrls: ['./container-item.component.css'],
})
export class ContainerItemComponent implements OnInit {

  @Input()
  dataItem!: IData;

  constructor() { }

  ngOnInit(): void {
  }

}

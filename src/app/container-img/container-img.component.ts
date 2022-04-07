import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-container-img',
  templateUrl: './container-img.component.html',
  styleUrls: ['./container-img.component.css']
})
export class ContainerImgComponent {
  @Input()
  title!: string;

  @Input()
  country!: string;

  @Input()
  timeAgo!: string;

  @Output()
  clicked$ = new EventEmitter();

  clicked(): void {
    this.clicked$.next();
  }

  saludar(): void {
    console.log(this.title);
    console.log(this.country);
    console.log(this.timeAgo);
  }
}

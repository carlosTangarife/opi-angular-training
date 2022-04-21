import { Injectable } from '@angular/core';

import { INotify } from './notify';

@Injectable()
export class NotifyConsoleService extends INotify{
  success(): void {
    console.log('success');
  }

  error(): void {
    console.log('error');
  }

  warning(): void {
    console.log('warning');
  }

  info(): void {
    console.log('info');
  }

}

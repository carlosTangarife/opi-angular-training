import Swal from 'sweetalert2';

import { Injectable } from '@angular/core';

import { INotify } from './notify';

@Injectable()
export class NotifyAlertService extends INotify {
  success(): void {
    Swal.fire({
      icon: 'success',
      title: 'success',
      text: 'Something went wrong!',
    })
  }

  error(): void {
    Swal.fire({
      icon: 'error',
      title: 'error',
      text: 'Something went wrong!',
    })
  }

  warning(): void {
    Swal.fire({
      icon: 'warning',
      title: 'warning',
      text: 'Something went wrong!',
    })
  }

  info(): void {
    Swal.fire({
      icon: 'info',
      title: 'info',
      text: 'Something went wrong!',
    })
  }
}

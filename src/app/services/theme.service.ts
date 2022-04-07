

import { Injectable } from '@angular/core';

import { ITheme } from '../models/ITheme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  getTheme(): ITheme {


    const theme = {
      primary: 'green',
      secondary: 'red',
      tertiary: 'blue',
      fontSize: '18px',
      padding: '15px',
      margin: '16px',
    };

    const theme2 = {
      primary: 'red',
      secondary: 'red',
      tertiary: 'blue',
      fontSize: '18px',
      padding: '15px',
      margin: '16px',
    };



    localStorage.setItem('theme', JSON.stringify(theme));
    return {
      defaul: theme,
      custome: theme2
    }
  }
}

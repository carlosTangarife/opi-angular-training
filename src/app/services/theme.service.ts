

import { Injectable } from '@angular/core';

import { ITheme } from '../models/ITheme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  getTheme(): ITheme {


    const theme = {
      primary: 'black',
      secondary: 'darkgray',
      tertiary: 'darkgreen',
      fontSize: '18px',
      padding: '0px',
      margin: '0px',
    };

    const theme2 = {
      primary: 'black',
      secondary: 'darkgray',
      tertiary: 'darkgreen',
      fontSize: '18px',
      padding: '0px',
      margin: '0px',
    };



    localStorage.setItem('theme', JSON.stringify(theme));
    return {
      defaul: theme,
      custome: theme2
    }
  }
}

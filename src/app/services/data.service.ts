import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IData } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  constructor(private readonly _httpClient: HttpClient){

  }

  getData(): Observable<Array<IData>>{

    return of([
      {
        title: 'Featured title',
        text: 'Paragraph of text beneath the heading to explain the heading. Well add onto it with another sentence and probably just keep going until we run out of words',
        link: 'Call to action'
      },
      {
        title: 'Featured title',
        text: 'Paragraph of text beneath the heading to explain the heading. Well add onto it with another sentence and probably just keep going until we run out of words',
        link: 'Call to action'
      },
      {
        title: 'Featured title',
        text: 'Paragraph of text beneath the heading to explain the heading. Well add onto it with another sentence and probably just keep going until we run out of words',
        link: 'Call to action'
      }
    ]);
  }

  getData2(): Observable<Array<IData>>{
    return of([
      {
        title: 'Featured title',
        text: 'Paragraph of text beneath the heading to explain the heading. Well add onto it with another sentence and probably just keep going until we run out of words',
        link: 'Call to action'
      },
      {
        title: 'Featured title',
        text: 'Paragraph of text beneath the heading to explain the heading. Well add onto it with another sentence and probably just keep going until we run out of words',
        link: 'Call to action'
      },
      {
        title: 'Featured title',
        text: 'Paragraph of text beneath the heading to explain the heading. Well add onto it with another sentence and probably just keep going until we run out of words',
        link: 'Call to action'
      }
    ]);
  }

  getData3(): Observable<any> {
    return this._httpClient.get<any>('/assets/data.json');
  }
}

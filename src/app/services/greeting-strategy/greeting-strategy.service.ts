import { Inject, Injectable } from '@angular/core';

import { GREETING_TOKEN } from './greetingToken';
import { IGreetingStrategy } from './IGreetingStrategy';

@Injectable({
  providedIn: 'root'
})
export class GreetingStrategyService implements IGreetingStrategy {

  constructor(@Inject(GREETING_TOKEN) private readonly strategies: Array<IGreetingStrategy>) {
  }

  sayHey(): void {
    this.strategies.forEach(x => x.sayHey());
  }
}

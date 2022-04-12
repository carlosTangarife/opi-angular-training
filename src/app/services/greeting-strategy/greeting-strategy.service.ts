import { Inject, Injectable } from '@angular/core';

import { GreetingType } from './greeting-type';
import { GREETING_TOKEN } from './greetingToken';
import { IGreetingStrategy } from './IGreetingStrategy';

@Injectable({
  providedIn: 'root'
})
export class GreetingStrategyService {

  constructor(@Inject(GREETING_TOKEN) private readonly strategies: Array<IGreetingStrategy>) {
  }

  sayHey(greetingType: GreetingType): void {

    const greetingStrategy = this.strategies.find(strategy => strategy.greetingType === greetingType);

    if(!greetingStrategy) {
      throw new Error("strategy no implement yet!!");
    }

    greetingStrategy.sayHey();
  }
}

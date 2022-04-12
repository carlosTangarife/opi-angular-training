import { Injectable } from '@angular/core';

import { GreetingType } from './greeting-type';
import { IGreetingStrategy } from './IGreetingStrategy';

@Injectable()
export class GreetingArgentinianStrategyService implements IGreetingStrategy{
  greetingType: GreetingType = GreetingType.ARGENTINIAN;
  sayHey(): void {
    console.log("Hola desde argentina");
  }
}

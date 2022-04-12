import { Injectable } from '@angular/core';

import { GreetingType } from './greeting-type';
import { IGreetingStrategy } from './IGreetingStrategy';

@Injectable()
export class GreetingBolivianStrategyService implements IGreetingStrategy{
  greetingType: GreetingType =  GreetingType.BOLIVIAN;
  sayHey(): void {
    console.log("Hola desde bolivia");
  }
}

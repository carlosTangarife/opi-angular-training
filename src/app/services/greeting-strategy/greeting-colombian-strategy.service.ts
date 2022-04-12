import { Injectable } from '@angular/core';

import { GreetingType } from './greeting-type';
import { IGreetingStrategy } from './IGreetingStrategy';

@Injectable()
export class GreetingColombianStrategyService implements IGreetingStrategy{
  greetingType: GreetingType = GreetingType.COLOMBIAN;
  sayHey(): void {
    console.log("Hola desde colombia");
  }
}

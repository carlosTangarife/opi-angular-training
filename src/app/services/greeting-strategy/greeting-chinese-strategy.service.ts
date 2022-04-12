import { Injectable } from '@angular/core';

import { GreetingType } from './greeting-type';
import { IGreetingStrategy } from './IGreetingStrategy';

@Injectable()
export class GreetingChineseStrategyService implements IGreetingStrategy{
  greetingType: GreetingType = GreetingType.CHINESE;
  sayHey(): void {
    console.log("Hola desde china");
  }
}

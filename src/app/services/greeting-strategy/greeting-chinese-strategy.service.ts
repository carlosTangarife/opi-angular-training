import { Injectable } from '@angular/core';

import { IGreetingStrategy } from './IGreetingStrategy';

@Injectable()
export class GreetingChineseStrategyService implements IGreetingStrategy{
  sayHey(): void {
    console.log("Hola desde china");
  }
}

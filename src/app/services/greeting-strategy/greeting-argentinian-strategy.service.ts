import { Injectable } from '@angular/core';

import { IGreetingStrategy } from './IGreetingStrategy';

@Injectable()
export class GreetingArgentinianStrategyService implements IGreetingStrategy{
  sayHey(): void {
    console.log("Hola desde argentina");
  }
}

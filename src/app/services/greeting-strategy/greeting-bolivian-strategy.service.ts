import { Injectable } from '@angular/core';

import { IGreetingStrategy } from './IGreetingStrategy';

@Injectable()
export class GreetingBolivianStrategyService implements IGreetingStrategy{
  sayHey(): void {
    console.log("Hola desde bolivia");
  }
}

import { Injectable } from '@angular/core';

import { IGreetingStrategy } from './IGreetingStrategy';

@Injectable()
export class GreetingColombianStrategyService implements IGreetingStrategy{
  sayHey(): void {
    console.log("Hola desde colombia");
  }
}

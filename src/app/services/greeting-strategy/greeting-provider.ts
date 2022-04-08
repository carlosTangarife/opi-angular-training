import { Provider } from '@angular/core';

import { GreetingArgentinianStrategyService } from './greeting-argentinian-strategy.service';
import { GreetingBolivianStrategyService } from './greeting-bolivian-strategy.service';
import { GreetingChineseStrategyService } from './greeting-chinese-strategy.service';
import { GreetingColombianStrategyService } from './greeting-colombian-strategy.service';
import { GREETING_TOKEN } from './greetingToken';

export const GREETING_PROVIDER: Array<Provider> = [
  { provide: GREETING_TOKEN, useClass: GreetingColombianStrategyService, multi: true },
  { provide: GREETING_TOKEN, useClass: GreetingBolivianStrategyService, multi: true },
  { provide: GREETING_TOKEN, useClass: GreetingArgentinianStrategyService, multi: true },
  { provide: GREETING_TOKEN, useClass: GreetingChineseStrategyService, multi: true }
];

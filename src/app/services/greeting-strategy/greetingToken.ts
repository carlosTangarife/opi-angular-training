import { InjectionToken } from '@angular/core';

import { IGreetingStrategy } from './IGreetingStrategy';

export const GREETING_TOKEN = new InjectionToken<IGreetingStrategy>('GREETING_TOKEN');

import { GreetingType } from './greeting-type';

export interface IGreetingStrategy {
  greetingType: GreetingType;
  sayHey(): void;
}

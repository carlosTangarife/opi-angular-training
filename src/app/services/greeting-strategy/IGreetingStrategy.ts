import { GreetingType } from './greeting-type';

export abstract class IGreetingStrategy {
  abstract greetingType: GreetingType;
  abstract sayHey(): void;
}

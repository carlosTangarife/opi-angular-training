

export abstract class INotify {
  abstract success(): void;
  abstract error(): void;
  abstract warning(): void;
  abstract info(): void;
}

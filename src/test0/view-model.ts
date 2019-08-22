// import {IVMConstructor} from "./bound-vm";
export interface IBoxedValue<T> {
  value: T;
  get(): T;
  set(value): void;
}

// export class BoxedValue implements IBoxedValue<T> {
//   constructor(parentObject, )
// }

export class ViewModel<T> {
  
  // constructor(value : T) {

  // }

  // protected boxedValue: IBoxedValue<T>;

  // public get value() {
  //   return this.boxedValue.get();
  // }
  // public set value(value: T) {
  //   this.boxedValue.set(value);
  // }

  // constructor(boxedValue: T) {
  //   this.boxedValue = boxedValue;
  // }
  
}

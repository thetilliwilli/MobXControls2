import { ViewModel } from "./view-model";

export function createBoundVM<TRef, TValue, TControl extends ViewModel<TValue>>(
  objectRef: TRef,
  select: (TRef) => TValue,
  VMConstructor: { new (TValue): TControl }
): TControl {
  var value = select(objectRef);
  return new VMConstructor(value);
}

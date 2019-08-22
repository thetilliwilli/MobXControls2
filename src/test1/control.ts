import { observable, computed } from "mobx";
import { action } from "mobx";
import { ValueReference, IValueReference } from "./value-reference";

export class BaseControl<TValue> {

  @observable
  public value : TValue;

  constructor(protected valueRef: IValueReference<TValue>) {
    this.value = valueRef.value;
  }

}

export class IntegerControl extends BaseControl<number> {
  @action.bound
  public up() { ++this.value; }
  @action.bound
  public down() { --this.value; }
}

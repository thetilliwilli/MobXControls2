import { observable } from "mobx";
import { action } from "mobx";
import { IPointer } from "./pointer";

export class BaseControl<TValue> {

  @observable
  public value : TValue;

  constructor(protected valueRef: IPointer<TValue>) {
    this.value = valueRef.value;
  }

}

export class IntegerControl extends BaseControl<number> {
  @action.bound
  public up() { ++this.value; }
  @action.bound
  public down() { --this.value; }
}

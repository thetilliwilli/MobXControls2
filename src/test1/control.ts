import { observable } from "mobx";
import { action } from "mobx";
import { IPointer } from "./pointer";

export class BaseControl<TValue> {

  @observable
  public value : TValue;

  protected setValue(value) {this.pointer.value = value;this.value = value;}

  constructor(protected pointer: IPointer<TValue>) {
    this.value = pointer.value;
  }

}

export class IntegerControl extends BaseControl<number> {
  @action.bound
  public up() { this.setValue(++this.value); }
  @action.bound
  public down() { this.setValue(--this.value); }
}

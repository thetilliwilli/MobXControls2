import { observable } from "mobx";
import { action } from "mobx";
import { IPointer } from "./pointer";

export class BaseControl<TValue> {

  @observable
  public value : TValue;

  constructor(protected pointer: IPointer<TValue>) {
    this.value = pointer.value;
  }

}

export class IntegerControl extends BaseControl<number> {
  @action.bound
  public up() { ++this.pointer.value;console.log("up"); }
  @action.bound
  public down() { --this.pointer.value; }
}

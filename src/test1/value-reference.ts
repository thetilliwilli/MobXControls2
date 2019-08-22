export interface IValueReference<TValue> {
  value : TValue;
  // public set value(value : TObj[TKey]) { this._obj[this._key] = value; }
}

export class ValueReference<TObj, TKey extends keyof TObj> implements IValueReference<TObj[TKey]>{
  public get value() : TObj[TKey] { return this._obj[this._key]; }
  public set value(value : TObj[TKey]) { this._obj[this._key] = value; }
  constructor(private _obj: TObj, private _key: TKey) { }
}
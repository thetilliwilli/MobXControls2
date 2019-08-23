export interface IPointer<TValue> {
  value : TValue;
}

export class Pointer<TObj, TKey extends keyof TObj> implements IPointer<TObj[TKey]>{
  public get value() : TObj[TKey] { return this._obj[this._key]; }
  public set value(value : TObj[TKey]) { this._obj[this._key] = value; }
  constructor(private _obj: TObj, private _key: TKey) { }
}

var data = {size:1};

// var ref = data->size;
var ref = new Pointer(data, "size");

//var refValue = *ref;
var refValue = ref.value;


//*ref = 12;
ref.value = 12;

// var ref = data->0;
var arr = [1];
new Pointer(arr, 0).value=13;
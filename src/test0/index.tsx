import React from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
// import { ViewModel } from "./view-model";
import { data } from "./data";
import { ShowValue } from "./show-value";
import { NumberView } from "./number-view";
// import { createBoundVM } from "./bound-vm";

console.log(typeof data.title.autoSize);
var data2 = observable(data);
console.log(typeof data.title.autoSize);
console.log(typeof data2.title.autoSize);

// var vm = createBoundVM(
//   data.title.background.color,
//   v => v.colorType,
//   NumberViewModel
// );

var all = (
  <div>
    {/* <ShowValue
      value={data}
      select={v => v.title.background.color}
      label="structure"
      format
    />
    <ShowValue
      value={data}
      select={v => v.title.background.color.colorType}
      label="number"
    /> */}
    <NumberView control={vm}/>
  </div>
);

render(all, document.getElementById("root"));

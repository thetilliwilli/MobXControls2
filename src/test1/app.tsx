import React from "react";
import { render } from "react-dom";
import { Pointer } from "./pointer";
import { BaseControl } from "./control";
import { IntegerListView } from "./view";
import { observable } from "mobx";

var data = [[1, 2, 3]];
var observableData = observable(data);

var App = (
  <div>
    <IntegerListView
      control={new BaseControl(new Pointer(observableData, 0))}
    />
  </div>
);

render(App, document.getElementById("root"));

setTimeout(_ => console.log(observableData[0][0]), 2000);
observableData[0].push(1);
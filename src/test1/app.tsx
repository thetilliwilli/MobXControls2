import React from "react";
import { render } from "react-dom";
import { rawData } from "./raw-data";
import { Pointer } from "./pointer";
import { IntegerControl, BaseControl } from "./control";
import { IntegerView, IntegerListView } from "./view";
import { observable, autorun, computed } from "mobx";

var ref = new Pointer(rawData.title, "maxSize");
var control = new IntegerControl(ref);
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

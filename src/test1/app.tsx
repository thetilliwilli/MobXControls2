import React from "react";
import { render } from "react-dom";
import { rawData } from "./raw-data";
import { Pointer } from "./pointer";
import { IntegerControl } from "./control";
import { IntegerView } from "./view";

var ref = new Pointer(rawData.title, "maxSize");
var control = new IntegerControl(ref);
var view = <IntegerView control={control} />;

var App = (
  <div>
    APP
    {view}
  </div>
);

render(App, document.getElementById("root"));

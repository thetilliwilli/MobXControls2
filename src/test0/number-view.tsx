import React from "react";
import { ShowValue } from "./show-value";
import { ViewModel } from "./view-model";

// export  class NumberViewModel extends ViewModel<number>{
//   public up(){this.boxedValue.set(++this.boxedValue.value);}
// }

// export function NumberView(props : {control : NumberViewModel}){
//   return <div><ShowValue value={props.control.value}/><span onClick={props.control.up}>+</span></div>;
// }

export class View<TRef, TProp extends keyof TRef, TControl> extends React.Component<{ref : TRef, prop: TProp, control:TControl}>
{
  // constructor(){}
  // render(){
  //   return "";
  // }
}

// export class NumberView extends View<object> 
// {
//   render(){
//     return "";
//   }
// }
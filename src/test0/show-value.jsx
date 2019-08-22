import React from "react";
import { observer } from "mobx-react";

@observer
class ShowValue extends React.Component {
  render() {
    var selector = this.props.select || (x => x);
    var value = selector(this.props.value);
    var result = this.props.format
      ? JSON.stringify(value, null, " ")
      : JSON.stringify(value);
    var label = this.props.label || "";
    return <pre>{`${label}: ${result}`}</pre>;
  }
}

export { ShowValue };

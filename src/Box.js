import React from "react";
import "./styles.css";
class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button className="square" onClick={() => alert("click")}>
        <p className="button-text">         {this.props.value}
</p>
      </button>
    );
  }
}

export default Box;

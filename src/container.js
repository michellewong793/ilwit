import React from "react";
import Box from "./Box.js";
import "./styles.css";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      shoutouts: ["she is cool", "she is smart", "I think she has a great butt"]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({
      shoutouts: [...this.state.shoutouts, this.state.value]
    });
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="container">
          {" "}
          {this.state.shoutouts.map((shoutout, index) => (
            <Box value={shoutout} key={index} />
          ))}
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Give yourself a shoutout! You're a badass!
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}
export default Container;

import React from "react";
import Box from "./Box.js";
import "./styles.css";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      shoutouts: ["You are great!", "You are smart.", "When I am sad, I try to take four breaths."]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({
      shoutouts: [...this.state.shoutouts, this.state.value],
      value: ""
    });
    event.preventDefault();
    event.target.reset();
  }

  render() {
    return (
      <>
        <h1> grateful counter </h1>
       <p className="roboto"> In a society that has you counting money, pounds, calories, and steps, be a rebel and count your blessings instead. - Lisa Heckman</p> 
        <form onSubmit={this.handleSubmit} className="form" id="myForm">
          <label className="label">
            What are you grateful for today? 
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div className="container">
          {" "}
          {this.state.shoutouts.map((shoutout, index) => (
            <Box value={shoutout} key={index} />
          ))}
        </div>
      </>
    );
  }
}
export default Container;

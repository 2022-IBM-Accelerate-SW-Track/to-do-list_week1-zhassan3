import React, { Component } from "react";
import { Button, TextField } from "@mui/material";
import { Badge } from '@mui/material';

class AddTodo extends Component {
  // A local react state of the this component with a content property set to nothing.
  constructor() {
    super();
    this.state = {
      content: "",
    };
  }
  // The handleChange function updates the react state with the new input value provided from the user.
  // "event" is the defined action a user takes. In this case, the event is triggered when the user types something
  // into the text field.
  handleChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  };
  // The handleSubmit function collects the forms input and puts it into the react state.
  // event.preventDefault() is called to prevents default event behavior like refreshing the browser.
  // this.props.addTodo(this.state) passes the current state (or user input) into the addTodo function defined
  // in the Home.js file which then adds the input into the list.
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.content.trim()) {
      this.props.addTodo(this.state);
      this.setState({
        content: "",
      });
    }
  };
  render() {
    return (
      // 1. The return statement should include a text field input with the handleChange function from above that
      // is passed into an onChange event.
      // 2. The return should also include a button with the handleSubmit function from above that is passed into
      // an OnClick event.
      // 3. The value of the text field also should reflect the local state of this component.
      <div>
        <TextField
          label="Add New Item"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.content}
        />
        <Button
          style={{ marginLeft: "10px" }}
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
        <Badge badgeContent={"click me"} color='secondary' />


      </div>
    );
  }
}

export default AddTodo;
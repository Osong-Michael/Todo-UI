import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiUrl: props.apiUrl,
      task: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="todo" autoComplete="off">
          <TextField 
            id="task-input"
            label="Task Description"
            variant="outlined"
            type="text"
            name="todo[task]"
            onChange={this.handleTaskChange}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Add Task
          </Button>
        </form>
      </div>
    )
  }
}

export default TodoForm;
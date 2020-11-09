import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'

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

  handleSubmit(e) {
    e.preventDefault();
    this.formSubmit(e.target);
    e.target.reset();
  }

  async formSubmit(formData) {
    const data = new FormData(formData);
    await fetch(this.state.apiUrl, {
      method: 'POST',
      mode: 'cors',
      body: data
    }).then(response => response.json())
        .then(response => this.props.updateTodoList(response))
  }

  handleTaskChange(e) {
    this.setState({
      task: e.target.value
    })
  }
  
  render() {
    return (
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs={10}>
          <form onSubmit={this.handleSubmit} id="todo" autoComplete="off">
            <Grid container>
              <Grid item xs={12}>
                <TextField 
                  id="task-input"
                  label="Task Description"
                  variant="outlined"
                  type="text"
                  name="todo[task]"
                  onChange={this.handleTaskChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                  id="body-input"
                  label="Task Body"
                  variant="outlined"
                  type="text"
                  style={{width: "99.5%", borderRadius: "5px"}}
                  rowsMin={4}
                  placeholder="Add todo Decription..."
                  name="todo[body]"
                  />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{height: '100%', margin: '0 0 0 7px'}}
                >
                  Add Task
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    )
  }
}

export default TodoForm;
import React, { Component } from 'react';
import TodoForm from './TodoForm';

const apiUrl = 'http://localhost:3001/api/vi/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  
  render() {
    return (
      <div>
        <TodoForm />
        <p>Hey I am from TodoList</p>
      </div>
    )
  }
}

export default TodoList;
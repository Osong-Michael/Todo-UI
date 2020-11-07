import React, { Component } from 'react';
import TodoForm from './TodoForm';

const apiUrl = 'http://localhost:3001/api/v1/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.updateTodoList = this.updateTodoList.bind(this);
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    fetch(apiUrl)
      .then(response => response.json())
        .then(response_items => {
          this.setState({
            items: response_items
          })
        })
  }

  updateTodoList(item) {
    this.setState({
      items: [item, ...this.state.items]
    })
  }
  
  render() {
    // console.log(this.state.items)
    const items = this.state.items.map(item => (
      <li key={item.id}>{item.task}</li>
    ))

    return (
      <div>
        <TodoForm apiUrl={apiUrl} updateTodoList={this.updateTodoList}/>
        <ul className="todo-list">
          { items }
        </ul>
      </div>
    )
  }
}

export default TodoList;
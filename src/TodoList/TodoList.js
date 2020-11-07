import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import Grid from '@material-ui/core/Grid';

const apiUrl = 'http://localhost:3001/api/v1/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.updateTodoList = this.updateTodoList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
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
      items: [...this.state.items, item]
    })
  }

  deleteItem(item) {
    // console.log(item);
    let deleteURL = apiUrl + `/${item.id}`;
    fetch(deleteURL, {
      method: 'DELETE'
    }).then(() => {
      let _items = this.state.items;
      const index = _items.indexOf(item);
      _items.splice(index, 1);
      this.setState({
        items: _items
      })
    })
  }
  
  render() {
    const newItems = [...this.state.items].reverse();
    const items = newItems.map(item => (
      <TodoItem key={item.id} item={item} deleteItem={this.deleteItem}/>
    ))

    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TodoForm apiUrl={apiUrl} updateTodoList={this.updateTodoList} />
        </Grid>
        <Grid item xs={12} id="todo-list">
          { items }
        </Grid>
      </Grid>
    )
  }
}

export default TodoList;
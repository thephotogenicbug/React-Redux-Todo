import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions/actions'

import AddTodo from './components/addToDo.js'
import TodoList from './components/todoList.js'

class App extends Component {
  render() {
    const { dispatch, visibleTodos } = this.props

    return (
      <div>
        <AddTodo onAddClick={text => dispatch(addTodo(text))} />
        =============================================================
        <TodoList todos={visibleTodos} dispatch={dispatch} />
      </div>
    )
  }
}
function select(state) {
  return {
    visibleTodos: state.todos
  }
}
export default connect(select)(App);
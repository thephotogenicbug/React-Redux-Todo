import React, { Component } from 'react'
import Todo from './todo'

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo} dispatch={this.props.dispatch}
                    />
                )}
            </ul>
        )
    }
}
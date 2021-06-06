import React, { Component } from 'react';
import { deleteTodo } from '../actions/actions';

export default class Todo extends Component {
    render() {
        return (
            <li>
                {this.props.text}

                &nbsp; &nbsp;
                <button onClick={(e) => this.deleteToDO(e)}>DELETE</button>
            </li>
        )
    }
    deleteToDO(e) {
        console.log(e);
        this.props.dispatch(deleteTodo(this.props.text));
    }
}
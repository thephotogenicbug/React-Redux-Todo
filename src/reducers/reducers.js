import { combineReducers } from 'redux'
import { ADD_TODO, DELETE_TODO } from '../actions/actions';

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                }
            ]
        case DELETE_TODO:
            return state.filter((todo) => todo.text != action.text)
        default:
            return state
    }
}
const todoApp = combineReducers({
    todos
})
export default todoApp;
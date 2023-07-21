import * as types from './actionTypes'
import { Todo } from '../models/TodoModel'

export const addTodo = (text) => ({
    type: types.ADD_TODO,
    payload: new Todo(text)
})

export const completeTodo = (id) =>({type:types.COMPLETE_TODO, id})
export const deleteTodo = (id) =>({type:types.DELETE_TODO, id})
export const editMode = (id) =>({type:types.EDIT_MODE, id})
export const editTodo = (id,label) =>({type:types.EDIT_TODO, id,label})
export const deleteCompletedTodos = (id) =>({type:types.DELETE_COMPLETED_TODOS})
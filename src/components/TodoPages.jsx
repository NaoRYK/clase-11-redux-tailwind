import React from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCompletedTodos } from '../actions/todoActions'

const TodoPages = () => {

  const dispatch = useDispatch()

  const handlerDeleteACompletedTodos = () =>{
    dispatch(deleteCompletedTodos())
  }
    const todoList = useSelector(state =>state.todoList)
  return (
    <div className='mt-12 items-center justify-center  h-full flex  '>
        <div className='bg-white w-4/5 sm:w-96 min-h-44 h-full rounded-md shadow-lg'>


            <div className='sm:flex sm:row sm:justify-between p-4 grid gap-2 grid-rows-1' >
              <p className='font-light'>ToDo's por hacer</p>
              <button onClick={handlerDeleteACompletedTodos} className=' hover:bg-indigo-500 hover:text-white
              transition-all duration-150 border-2 p-1 rounded-md text-indigo-500 border-indigo-500'>Borrar Completados</button>
            </div>

            <TodoForm></TodoForm>

            <TodoList todos={todoList}></TodoList>
        </div>
    </div>
  )
}

export default TodoPages
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../actions/todoActions'

const TodoForm = () => {

    const dispatch = useDispatch()
    const [inputValue,setInputValue] = useState('')
    const handlerSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(inputValue))
        e.target.reset()

    }
  return (
    <form className='p-4' onSubmit={handlerSubmit}  action="" >
                <input  onChange={(e) => {setInputValue(e.target.value)}} className=' shadow-md border-2 border-indigo-600 rounded-lg p-2 w-4/5 text-indigo-600 mx-2' type="text" placeholder='Ingrese su ToDo' />
            </form>
  )
}

export default TodoForm
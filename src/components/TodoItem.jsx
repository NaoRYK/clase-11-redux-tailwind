import React, { useState, useRef,useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  completeTodo,
  deleteCompletedTodos,
  deleteTodo,
  editMode,
  editTodo,
} from "../actions/todoActions";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const myInput = useRef(null);
  const handlerCheck = () => {
    dispatch(completeTodo(todo.id));
  };
  const handlerDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handlerEditMode = () => {
    dispatch(editMode(todo.id));
  };
  const handlerEditTodo = (e) => {
    if (e.key === "Enter") {
      dispatch(editTodo(todo.id, inputValue));
      dispatch(editMode(todo.id));
    }
  };
  const handlerEditBlur = (e) => {
    dispatch(editTodo(todo.id, inputValue));
    dispatch(editMode(todo.id));
  };

  const [inputValue, setinputValue] = useState(todo.label);

  useEffect(() => {
    if(todo.editMode){
    myInput.current.focus();

    }
  
  }, [todo.editMode])
  
  return (
    <li
      className={` h-30  sm:h-auto max-w-full
    border-2 p-3 rounded-md m-2 justify-between flex border-indigo-600 transition-all duration-200
    ${todo.complete ? "completed" : ""}`}
    >
      <input
        type="checkbox"
        checked={todo.complete ? "checked" : ""}
        onChange={handlerCheck}
      />
      {todo.editMode ? (
        <input
          value={inputValue}
          onChange={(e) => {
            setinputValue(e.target.value);
          }}
          onKeyDown={handlerEditTodo}
          onBlur={handlerEditBlur}
          ref={myInput}
          className=" bg-transparent rounded-md border-0 p-2 text-indigo-600 outline-indigo-600"
          type="text"
        ></input>
      ) : (
        <span
          onDoubleClick={handlerEditMode}
          className="text-indigo-600 cursor-pointer p-2 w-48 sm:max-w-full overflow-clip  overflow-ellipsis"
        >
          {todo.label}
        </span>
      )}

      <button
        onClick={handlerDelete}
        className="font-bold border-2 rounded-lg hover:bg-red-400 transition-all duration-100 hover:text-white border-red-400 p-2 text-red-400"
        type="button"
      >
        Borrar ToDo
      </button>
    </li>
  );
};

import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import { useContext } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function TodoList() {

  const { list, setList } = useContext(TodoContext);
  const {dispatch} = useContext(TodoDispatchContext);

  function onFinished(todo, isFinished) {
    dispatch({type: 'finish_todo', payload: {todo, isFinished}})
  }

  function onDelete(todo) {
    dispatch({type: 'delete_todo', payload: {todo: todo}}) // here we can write only one time todo because name is same
  }

  function onEdit(todo, todoText) {
    dispatch({type: 'edit_todo', payload: {todo, todoText}})
  }

  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            isFinished={todo.finished}
            id={todo.id}
            todoData={todo.todoData}
            changeFinished={(isFinished) => onFinished(todo, isFinished)}
            onDelete={() => onDelete(todo)}
            onEdit={(todoText) => onEdit(todo, todoText)}
          />
        ))}
    </div>
  );
}

export default TodoList;

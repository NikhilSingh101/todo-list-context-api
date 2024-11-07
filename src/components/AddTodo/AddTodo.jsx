import { useContext, useState } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function AddTodo() {
  const [inputText, setInputText] = useState("");
  const {dispatch} = useContext(TodoDispatchContext);

  return (
    <div>
      <input
        value={inputText}
        type="text"
        placeholder="Add your todo"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          // updateList(inputText);
          dispatch({type: 'add_todo', payload: {todoText: inputText}});
          setInputText('');
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;

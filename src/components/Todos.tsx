import { ChangeEvent, useState } from "react";
import "../components/Todos.css";
import { List } from "./List";

function Todos() {
  const [todos, setTodos] = useState([""]);

  const [title, setTitle] = useState("");
  const handleSetTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleInsertTodo = () => {
    setTodos([...todos, title]);
    setTitle("");
  };

  const deleteTodo = (todoToDelete: string) => {
    const todosPersistent = todos.filter((todo) => {
      return todoToDelete !== todo;
    });
    setTodos(todosPersistent);
  };

  return (
    <>
      <div id="myDIV" className="header">
        <h2>Lista de tarefas</h2>
        <input
          type="text"
          id="myInput"
          value={title}
          onChange={handleSetTitle}
          placeholder="Título..."
        />
        <span onClick={handleInsertTodo} className="addBtn">
          Adicionar
        </span>
      </div>
      {todos.map((todo) => {
        return (
          todo && <List key={todo} content={todo} onDeleteTodo={deleteTodo} />
        );
      })}
    </>
  );
}

export default Todos;

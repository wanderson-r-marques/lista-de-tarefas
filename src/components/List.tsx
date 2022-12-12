import { useState } from "react";

interface TodoProps {
  content: string;
  onDeleteTodo: (todo: string) => void;
}

export function List({ content, onDeleteTodo }: TodoProps) {
  const handleDeleteComment = () => {
    onDeleteTodo(content);
  };
  const [completed, setCompleted] = useState(false);
  return (
    <ul id="myUL">
      <li
        onClick={() => setCompleted(!completed)}
        className={completed ? "checked" : ""}
      >
        {content}{" "}
        <span onClick={handleDeleteComment} className="close">
          ×
        </span>
      </li>
    </ul>
  );
}

import { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap CSS

// const list = [];

export default function App() {
  const [items, setItems] = useState([]);
  console.log(items);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  return <Form onAddItem={handleAddItem} />;
}

function Form({ onAddItem }) {
  const [todo, setToDo] = useState("");
  return (
    <div className="container">
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setToDo(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
  function HandleSubmit(e) {
    e.preventDefault();
    if (!todo) return;
    const newTodo = {
      description: todo,
      id: Date.now(),
    };
    onAddItem(newTodo);
    setToDo("");
  }
}

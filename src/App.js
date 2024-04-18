import { useState } from "react";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap CSS

// const list = [];

export default function App() {
  const [items, setItems] = useState([]);
  console.log(items);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="container">
      <div className="todo-section">
        <Form onAddItem={handleAddItem} />
        <DisplayItems items={items} onDeleteItem={handleDeleteItem} />
      </div>
    </div>
  );
}

function Form({ onAddItem }) {
  const [todo, setToDo] = useState("");
  return (
    <div className="container">
      <form className="form" onSubmit={HandleSubmit}>
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

function DisplayItems({ items, onDeleteItem }) {
  return (
    <div className="container">
      <div className="items">
        {items.map((item) => (
          <p className="items-list col-6" key={item.id}>
            {item.description}
            <img
              onClick={() => onDeleteItem(item.id)}
              src={require("./assets/trash-icon.png")}
              alt="delete-icon"
            />
          </p>
        ))}
      </div>
    </div>
  );
}

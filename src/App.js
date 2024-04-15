import { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap CSS

// const list = [];

export default function App() {
  const [items, setItems] = useState([]);
  console.log(items);

  

  return <Form setItems={setItems} />;
}

function Form({ setItems }) {
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
    const newTodo = {
      description: todo,
      id: Date.now(),
    };
    setItems(newTodo);
    setToDo("");
  }
}

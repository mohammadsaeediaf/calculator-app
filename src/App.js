import { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap CSS

// const list = [
//   {}
// ]

export default function App() {
  const [todo, setToDo] = useState("");
  return <UI todo={todo} setToDo={setToDo} />;
}

function UI({ todo, setToDo }) {
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
}

function HandleSubmit(e) {
  e.preventDefault();
  console.log(e);
}

import { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap CSS

export default function App() {
  return (
    <div className="container">
      <form onSubmit={HandleSubmit}>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}

function HandleSubmit(e) {
  const [list, setList] = useState("");
  console.log(e);
}

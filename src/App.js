import { getDatabase, ref, set} from "firebase/database/";
import { app } from "./firebase";
import './App.css';

const db = getDatabase(app);;

function App() {
  const putData = () => {
    set(ref(db, "users/Taha"),{
      name: "Taha",
      age: 25
    });
  };
  return (
        <div className="app">
          <h1>Firebase React App</h1>
        <button onClick={putData}>Put Data</button>
        </div>
      
  );
}

export default App;

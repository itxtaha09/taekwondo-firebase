import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import './App.css';

const auth = getAuth(app);

function App() {
  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "peakyblinder450@gmail.com",
      "forgottern149"
    ).then((value) => console.log (value));
    };
  return (
        <div className="app">
          <h1>Firebase React App</h1>
        <button onClick={signupUser}>Create USER</button>
        </div>
      
  );
  };


export default App;

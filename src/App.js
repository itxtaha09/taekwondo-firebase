import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { app } from "./firebase";
import SignupPage from "./pages/signup";
import SigninPage from "./pages/signin";
import './App.css';

const auth = getAuth(app);

function App() {
  const [ user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("Yes you are logged out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {  
  return (
        <div className="app">
          <SignupPage/>
          <SigninPage/>
        </div>
      
  );
  };

  return(
    <div className="app">
      <h1>Hello {user.email}</h1>
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  )
}


export default App;

import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { app } from "../firebase";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const SignupPage = ()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(
            auth,
            email,
            password).then(value => alert ("Successfully created"))
        };
    
    const signupWithGoogle = () => {
        signInWithPopup(auth, googleProvider) //.then(value => alert ("Successfully signed in")).catch(err => console.log (err));
    };
    return (
        <div className="signup-page">
            <h1>SignUp Page</h1>
            <label>Email</label>
            <input onChange={ (e) => setEmail(e.target.value)}
            value={email}
            type="email" required placeholder="Enter your Email here"/>
            <label>Password</label>
            <input onChange={ (e) => setPassword(e.target.value)}
            value={password}
            type="Password" required placeholder="Enter your Password here"/>
            <br/>
            <button onClick={ signupWithGoogle }>Sign in with Google</button>
            <button onClick={ createUser} >Sign Up</button>
        </div>
    );
}

export default SignupPage;
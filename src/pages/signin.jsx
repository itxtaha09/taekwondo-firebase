import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SigninPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password).then(value => alert("Successfully signed in")).catch(err => console.log(err));
    };
    return (
        <div className="signin-page">
            <h1>Sign in Page</h1>
            <label>Enter your Email here</label>
            <input onChange={e => setEmail(e.target.value)} value={email} type="email" required placeholder="Enter Your Email here" />
            <label>Enter Your Password here</label>
            <input onChange={e => setPassword(e.target.value)} value={password} type="Password" required placeholder="Enter Your Password here" />
            <button onClick={signinUser}>Sign in</button>
        </div>
    )
}

export default SigninPage;
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider, db } from '../../Firebase/FirebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import "../../assets/bootstrap/css/bootstrap.min.css"

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signup = async () => {
        if (email === "" || password === "") {
            return alert("Please fill all fields");
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                createdAt: new Date(),
            });

            alert("Signup Successful");
            setEmail("");
            setPassword("");
            navigate('/');
        } catch (error) {
            console.error("Signup Error:", error.message);
            alert(`Error: ${error.message}`);
        }
    };

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Save user data to Firestore (if needed)
            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                createdAt: new Date(),
                displayName: user.displayName,
                photoURL: user.photoURL,
            });

            alert("Google Sign-In Successful");
            navigate('/');
        } catch (error) {
            console.error("Google Sign-In Error:", error.message);
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ backgroundColor: '#343a40' }}>
                <h1 className="text-center text-light mb-4">Signup</h1>
                <div className="mb-3">
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        className="form-control bg-dark text-white border-0"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control bg-dark text-white border-0"
                        placeholder="Password"
                    />
                </div>
                <button
                    onClick={signup}
                    className="btn btn-danger w-100 mb-3">
                    Signup with Email
                </button>
                <button
                    onClick={signInWithGoogle}
                    className="btn btn-primary w-100 mb-3">
                    Signup with Google
                </button>
                <div className="text-center text-light">
                    <span>Already have an account? </span>
                    <Link className="text-danger" to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;

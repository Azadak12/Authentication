import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/FirebaseConfig';
import "../../assets/bootstrap/css/bootstrap.min.css"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signin = async () => {
        if (email === "" || password === "") {
            return alert("Please fill all fields");
        }
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('user', JSON.stringify(user));
            alert("Signin Successful");
            navigate('/');
            setEmail("");
            setPassword("");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ backgroundColor: '#343a40' }}>
                <h1 className="text-center text-light mb-4">Login</h1>
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
                    onClick={signin}
                    className="btn btn-warning w-100 mb-3">
                    Login
                </button>
                <div className="text-center text-light">
                    <span>Don't have an account? </span>
                    <Link className="text-warning" to="/signup">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;

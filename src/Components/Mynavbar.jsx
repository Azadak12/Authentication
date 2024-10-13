import { Link, useNavigate } from 'react-router-dom';
import "../assets/bootstrap/css/bootstrap.min.css"

function Mynavbar() {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear('user');
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container">
                <Link className="navbar-brand font-weight-bold" to="/">
                    BeautyConnect 
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        {user && (
                            <li className="nav-item">
                                <span className="nav-link cursor-pointer" onClick={logout}>
                                    Logout
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Mynavbar;

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isLoggedIn, getUser, logOut } from '../utils/auth'
import logo from "../assets/Logo.png"

const Navbar = () => {
    const navigate = useNavigate();
    const logged = isLoggedIn();
    const user = getUser();

    function hadleLogout() {
        logOut();
        navigate("/login");
    }

    return (
        <nav className="w-full bg-white border-b border-slate-300 px-6 py-5 flex justify-between items-center">
            <Link to="/" className="text-blue-600 font-bold text-xl">
                <img src={logo} alt="" />
            </Link>

            <div className="flex items-center gap-4">
                {!logged && (
                    <>
                        <Link
                            to="/login"
                            className="bg-blue-600 text-white hover:bg-blue-800 px-5 py-2 rounded-md mr-3 transition"
                        >
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            className="bg-blue-600 text-white hover:bg-blue-800 px-5 py-2 rounded-md transition"
                        >
                            Signup
                        </Link>
                    </>
                )}

                {logged && (
                    <div className="flex items-center gap-3">
                        <span className="text-slate-900 mr-4 text-lg font-bold">
                            Welcome {user?.username}
                        </span>

                        <button
                            onClick={hadleLogout}
                            className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-3 py-2 rounded-md"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar

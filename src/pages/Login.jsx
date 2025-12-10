import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../utils/auth'

const Login = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({ username: "", password: "" })
    const handleLogin = (e) => {
        e.preventDefault()
        if (login(form.username, form.password)) {
            localStorage.setItem("loggedIn", true)
            navigate("/products")
        } else {
            alert("Invalid credentials")
        }
    }
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center">

            <form onSubmit={handleLogin} className="bg-white shadow-md rounded-xl p-8 w-full max-w-md border border-slate-300">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                    Login to Your Account
                </h2>
                <input required className="w-full mb-4 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" placeholder='Username' onChange={(e) => setForm({ ...form, username: e.target.value })} />
                <input required className="w-full mb-4 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" type="password" placeholder='Ente Password' onChange={(e) => setForm({ ...form, password: e.target.value })} />
                <button
                    type="submit"
                    className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md"
                >
                    Login
                </button>
                <p className="text-sm text-center text-slate-600 mt-4">
                    Don't have an account?{" "}
                    <span
                        onClick={() => navigate("/signup")}
                        className="text-blue-600 cursor-pointer hover:underline"
                    >
                        Signup
                    </span>
                </p>
            </form>
        </div>
    )
}

export default Login

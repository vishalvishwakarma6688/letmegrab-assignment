import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveUser } from '../utils/auth'

const Signup = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirm: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if(form.password !== form.confirm){
            alert("Passwords do not match")
            return;
        }

        saveUser({username: form.username, email: form.email, password: form.password})
        alert("Signup successful")
        navigate("/login")
    }

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center">
            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-xl p-8 w-full max-w-md border border-slate-300"
            >
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                    Create Account
                </h2>

                {/* Username */}
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full mb-4 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    onChange={(e)=> setForm({...form, username: e.target.value})}
                />

                {/* Email */}
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    onChange={(e)=> setForm({...form, email: e.target.value})}
                />

                {/* Password */}
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    onChange={(e)=> setForm({...form, password: e.target.value})}
                />

                {/* Confirm */}
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full mb-6 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    onChange={(e)=> setForm({...form, confirm: e.target.value})}
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md"
                >
                    Signup
                </button>

                <p className="text-sm text-center text-slate-600 mt-4">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-blue-600 hover:underline cursor-pointer"
                    >
                        Login
                    </span>
                </p>
            </form>
        </div>
    )
}

export default Signup

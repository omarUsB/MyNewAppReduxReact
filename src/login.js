import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dom from './dom.png';

export default function Login() {
    const navigate = useNavigate();
    const [check, setcheck] = useState({
        username: '',
        pass: ''
    });

    const location = useLocation();
    const { reg } = location.state || {};
    const { username, pass } = reg || {};

    const handleuser = (e) => {
        setcheck({ ...check, username: e.target.value });
    }

    const handlepass = (e) => {
        setcheck({ ...check, pass: e.target.value });
    }

    const verife = (e) => {
        e.preventDefault();
        if (username === check.username && pass === check.pass) {
            alert('Bienvenue monsieur dans l\'application de gestion des Stagiaires');
            navigate('/Home');
        } else {
            alert('Les données que vous avez saisies sont fausses ou vous n\'êtes pas enregistré.');
        }
    }

    return (
        <div className="bg-cover h-screen" style={{ backgroundImage: `url(${dom})` }}>
            <h1 className="text-4xl text-dark text-center pt-8">Login In</h1>
            <form className="container mx-auto max-w-md mt-8 p-8 bg-white rounded shadow-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-input w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                        onChange={handleuser}
                    />
                    <p className="text-gray-500 text-xs mt-1">Tapez votre username</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-input w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                        onChange={handlepass}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-primary text-white py-2 px-4 w-full rounded"
                    onClick={verife}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

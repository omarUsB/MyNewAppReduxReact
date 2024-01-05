import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import lol from './lol.png';

export default function Users() {
  const navigate = useNavigate();

  const [reg, setReg] = useState({
    username: "",
    email: "",
    pass: "",
    passtwo: "",
  });

  const handleUsername = (e) => {
    setReg({ ...reg, username: e.target.value });
  };

  const handleEmail = (e) => {
    setReg({ ...reg, email: e.target.value });
  };

  const handlePass = (e) => {
    setReg({ ...reg, pass: e.target.value });
  };

  const checkingpass = (e) => {
    e.preventDefault();
    if (reg.username === "" || reg.email === "" || reg.pass === "") {
      alert("Tous les champs sont obligatoires");
    } else if (reg.pass === reg.passtwo) {
      alert("Enregistrement réussi");

      navigate("/login", { state: { reg } });
    } else {
      alert("Les mots de passe ne correspondent pas");
    }
  };

  const handlePasstwo = (e) => {
    setReg({ ...reg, passtwo: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: `url(${lol})` }}>
      <div className="max-w-md w-full mx-4">
        <div className="bg-white p-8 border border-gray-300 rounded shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Votre Infos
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-input w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                onChange={handleUsername}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-input w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                onChange={handleEmail}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-input w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                onChange={handlePass}
              />
            </div>
            <div className="mb-8">
              <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-input w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                onChange={handlePasstwo}
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 w-full rounded"
              onClick={checkingpass}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

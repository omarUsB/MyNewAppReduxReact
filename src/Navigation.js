import React from "react";
import { Link } from "react-router-dom";
// import "../src/bootstrap-5.3.2-dist/css/bootstrap.min.css";
import Footer from "./Footer";


export default function Navigation() {
  
  return (
    <div className="bg-gray-100 font-sans min-h-screen">

<style>
        {`
          .btn-nav {
            display: inline-block;
            padding: 8px 16px;
            background: linear-gradient(to right, #4a90e2, #7b68ee);
            color: white;
            font-weight: bold;
            text-decoration: none;
            border-radius: 5px;
            transition: background 0.3s ease;
          }

          .btn-nav:hover {
            background: linear-gradient(to right, #4169e1, #6a5acd);
          }
        `}
      </style>
 
      <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg font-bold">
            <sup className="text-yellow-500">By OmarKhalil</sup>
          </Link>
          <img src={require("./ofppt_lg.png")} className="w-16" alt="Logo" />
          <h2 className="font-bold italic">ISTA Ntic Syba</h2>
          <div className="space-x-4">
            <Link
              to="/"
              className="btn-nav"
            >
              Home
            </Link>
            <Link
              to="/AjouterArticle"
              className="btn-nav"
            >
              Add Stagiaire
            </Link>
            <Link
              to="/ListeArticles"
              className="btn-nav"
            >
               List Of stagiaire
            </Link>
          </div>
        </div>
      </nav>

      <div className="bg-gray-900 text-white text-center py-10">
        <h1 className="text-4xl font-italic"> Application De gestion De Stagiaire</h1>
      </div>

      <div className="container mx-auto mt-2 w-full p-6 bg-secondary rounded-lg shadow-md  ">
        <p className="text-gray-800 font-bold">
          <h1 className="text-3xl font-italic">Welcome!</h1>
          <p className="text-gray-900">
            Welcome to our "Intern Management" application. This user-friendly
            application offers a comprehensive solution for handling various
            aspects of intern data, facilitating efficient tracking, and
            organization.
          </p>

          <h3 className="text-2xl font-italic">Intern List:</h3>
          <p className="text-gray-900">
            View a detailed list of interns, complete with essential information
            such as name, age, and field of study.
          </p>

          <h3 className="text-2xl font-italic">Add Intern:</h3>
          <p className="text-gray-900">
            Easily add new interns to the system by providing their relevant
            details.
          </p>

          {/* Add more sections as needed */}
        </p>
      </div>

      <Footer className="mt-2" />
    </div>
  );
}

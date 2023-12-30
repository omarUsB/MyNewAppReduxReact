import React from "react";
import { Link } from "react-router-dom";
import "../src/bootstrap-5.3.2-dist/css/bootstrap.min.css";

export default function Navigation() {
  const style = {
    navLink: {
      color: "white",
      fontWeight: "bold",
      border: "2px solid black",
      padding: "5px 15px",
      borderRadius: "10px",
      backgroundColor: "red", // Added red background
      marginLeft: "20px",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    textPrimary: {
      color: "#007BFF",
    },
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <div className="container-fluid" style={style.container}>
          <Link to="/" className="navbar-brand text-white fw-bold">
            {" "}
            <sup>By OmarKhalil</sup>
          </Link>
          <img src={require("./ofppt_lg.png")} width={"80px"} alt="Logo" />
          <h2 className="fw-bolder fst-italic text-secondary">
            ISTA Ntic Syba
          </h2>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={style.navLink}>
                  Acceuil
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/AjouterArticle"
                  className="nav-link"
                  style={style.navLink}
                >
                  Ajouter un Stagiaires
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/ListeArticles"
                  className="nav-link"
                  style={style.navLink}
                >
                  Liste Des Stagiaires
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="border border-light p-2 rounded mt-1">
        <p className="text-dark fw-bolder p-3">
          <h1 className="fst-italic" style={style.textPrimary}>
            {" "}
            Gestion de Stagiaires Application
          </h1>

          <p className="text-white">
            Welcome to our "Gestion de Stagiaires" application. This
            user-friendly application offers a comprehensive solution for
            handling various aspects of intern data, facilitating efficient
            tracking, and organization.
          </p>

          <h3 className="fst-italic text-primary">Liste des Stagiaires:</h3>
          <p className="text-white">
            View a detailed list of interns, complete with essential information
            such as name, age, and field of study.
          </p>

          <h3 className="fst-italic text-primary">Ajouter un Stagiaire:</h3>
          <p className="text-white">
            Easily add new interns to the system by providing their relevant
            details.
          </p>

          <h3 className="fst-italic text-primary">Details du Stagiaire:</h3>
          <p className="text-white">
            Access in-depth information about each intern, including a detailed
            profile and associated data.
          </p>

          <h3 className="fst-italic text-primary">Supprimer un Stagiaire:</h3>
          <p className="text-white">
            Effortlessly remove interns from the system when necessary.
          </p>

          <h2 className="fst-italic text-primary">"Gestion de Stagiaires"</h2>
          <p className="text-white">
            is not just a tool; it's a solution that simplifies the complexities
            of intern management, allowing you to focus on fostering a positive
            and productive learning environment.
          </p>
        </p>
      </div>
    </div>
  );
}

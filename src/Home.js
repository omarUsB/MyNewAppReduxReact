import React from "react";
import Navigation from "./Navigation";
import "../src/bootstrap-5.3.2-dist/css/bootstrap.min.css"
export default function Home() {
  return (
    <div className="bg-dark vh-100">
      <h1 className="text-light">Bienvenue dans l'application de gestion des Stagiaires</h1>
      <Navigation />
    </div>
  );
}

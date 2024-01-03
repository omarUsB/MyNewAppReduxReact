import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../src/bootstrap-5.3.2-dist/css/bootstrap.min.css";

export default function DetailArticle() {
  const { id } = useParams();
  const liststg = useSelector((state) => state.liststg);
  const stgFind = liststg.find((stg) => stg.id === Number(id));

  const style = {
  
    did:{
      height:'100vh'
    }  }


  return (
    <div className="container " style={style.did}>
      <h1 className="text-center mb-4">Details de Stagiaire Numero : {id}</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Nom de Stagiaire:</strong> {stgFind.nom}
                </li>
                <li className="list-group-item">
                  <strong>Age de Stagiaire:</strong> {stgFind.age}
                </li>
                <li className="list-group-item">
                  <strong>Filliere:</strong> {stgFind.filliere}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Link to="/ListeArticles" className="btn btn-dark ">
        Retour
      </Link>
    </div>
  );
}

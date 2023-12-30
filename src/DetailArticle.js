import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../src/bootstrap-5.3.2-dist/css/bootstrap.min.css";

export default function DetailArticle() {
  const { id } = useParams();
  const liststg = useSelector((state) => state.liststg); 
  const stgFind = liststg.find((stg) => stg.id === id);
  const style = {
    li: {
      fontSize: '2rem'
    },
    div: {
      backgroundColor: "#5F9EA0",
      border: "4px solid #DC3545",
      padding: "20px",
      borderRadius: "10px",
      width: '650px',
    },
    div1: {
      display: 'flex',
      justifyContent: 'center'
    }
  };

  return (
    <div>
      <h1>Details de Stagiaire Numero : {id}</h1>
      <div style={style.div1}>
        <div style={style.div}>
          <ul className="list-unstyled">
            <li className=" text-white fw-bolder" style={style.li}> Le nom de Stagaiaire : {stgFind.nom}</li>
            <li className="text-white fw-bolder" style={style.li}> Age de Stagaiaire : {stgFind.age}</li>
            <li className=" text-white fw-bolder" style={style.li}> Filliere  : {stgFind.filliere}</li>
          </ul>
        </div>
      </div>
      <Link to="/ListeArticles" className="btn btn-dark text-white">Retour</Link>
    </div>
  );
}

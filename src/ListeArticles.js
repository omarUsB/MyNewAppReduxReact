import React from "react";
import { Link } from "react-router-dom";
import "../src/bootstrap-5.3.2-dist/css/bootstrap.min.css";
import { useSelector,useDispatch } from "react-redux";
import { remove,updstg } from "./store/actions";

export default function ListeArticles() {
  const dispatch=useDispatch()
  const liststg=useSelector((state)=> state.liststg)
  const style = {
   
    did:{
      height:'100vh'
    }}

  const supprimerStg = (id) => {
   dispatch(remove(id))
  };

  const Updatestg = (id) => {
    let nomm = "";
    let age = "";
    let filliere = "";
    while (nomm === '' || age === '' || filliere === '') {
      nomm = prompt("Donne votre nom ");
      age = prompt("donne votre age ");
      filliere = prompt("donne votre filliere ");
      if (nomm === null || age === null || filliere === null) {
        return;
      }
    }
  
    const updatedStagiaire = {
      id: id,
      nom: nomm,
      age: age,
      filliere: filliere,
      ntic:require("./ofppt_lg.png")
    };
  
    dispatch(updstg(id, updatedStagiaire)); 
    alert('Stagiaire mis à jour avec succès!');
  };
  
  return (
    <div className="container " style={style.did}>
      <h1>Liste des Stagiaires</h1>
      <h2 className="mb-4 blockquote">Nombre de Stagiaires : {liststg.length}</h2>
        <Link to="/Home" className="btn btn-warning text-white text-uppercase  font-weight-bold mt-3 mb-2">Retour</Link>
      <div className="row">
        {liststg.map((stg) => (
          <div key={stg.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={stg.ntic} width={'60px'} height={'60px'} alt="Stagiaire" />
              <div className="card-body">
                <h5 className="card-title">Nom: {stg.nom}</h5>
                <p className="card-text">Age: {stg.age}</p>
                <p className="card-text">Filliere: {stg.filliere}</p>
                <Link to={`/DetailArticle/${stg.id}`} className="btn btn-danger me-2">Details</Link>
                <button className="btn btn-secondary" onClick={(e) => supprimerStg(stg.id)}>Supprimer</button>
                <button className="btn btn-info ms-2" onClick={(e) => Updatestg(stg.id)}>Modifier</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

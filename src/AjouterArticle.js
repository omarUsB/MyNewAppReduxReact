import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addstg } from "./store/actions";
import "../src/bootstrap-5.3.2-dist/css/bootstrap.min.css";

export default function AjouterArticle() {
  const dispatch=useDispatch()
  const liste = useSelector((state) => state.liststg);

  const style = {
    Link: {
      textDecoration: 'none',
      marginLeft: '20px',
      
    },
    did:{
      height:'100vh'
    },
    text:{
      fontFamily:'Fantasy'
    }
  };

  

  let [id, setid] = useState();
  let [nom, setnom] = useState("");
  let [age, setage] = useState();
  let [filliere, setfilliere] = useState("");

  function handleId(e) {
    setid(Number(e.target.value));
  }

  function handlenom(e) {
    setnom(e.target.value);
  }

  function handleage(e) {
    setage(e.target.value);
  }

  function handlefilliere(e) {
    setfilliere(e.target.value);
  }

  function handleStagiaire(e) {
    e.preventDefault();
    const stgFind = liste.find(
      (stg) => stg.id === Number(id)
    );

    if (nom === '' || age === '' || filliere === '') {
      alert('All inputs are required');
    } else if (stgFind === undefined) {
      const stg = {
        id: id,
        nom: nom,
        age: age,
        filliere: filliere,
        ntic: require("./ofppt_lg.png")
      };
      dispatch(addstg(stg))
      alert("c'est bien Ajouter")
    } else {
      alert("ID exists");
    }
  }

  return (
    <div className="container" style={style.did} >
      <form className="form-group" >
        <h1 style={style.text}>Ajouter Nouveau Stagiaire :</h1>
        <div className="form-text text-warning">Tout les infos est obligee</div>

        <label className="form-label text-white" style={style.text}>ID :</label>
        <input  style={style.text}
          type="number"
          onChange={(e) => handleId(e)}
          value={id}
          className="form-control"
        />

        <label className="form-label text-white mt-5" style={style.text}>Nom :</label>
        <input style={style.text}
          type="text"
          onChange={(e) => handlenom(e)}
          value={nom}
          className="form-control"
        />

        <label className="form-label text-white mt-5" style={style.text}>Âge :</label>
        <input style={style.text}
          type="number"
          onChange={(e) => handleage(e)}
          value={age}
          className="form-control"
        />

        <label className="form-label text-white mt-5" style={style.text}>Filière :</label>
        <input style={style.text}
          onChange={(e) => { handlefilliere(e) }}
          className="form-control"
        />

        <button
          type="submit"
          onClick={handleStagiaire}
          className="btn btn-danger text-uppercase font-weight-bold mt-5"
        >
          Ajouter
        </button>

        <Link
          to="/Home"
          className="btn btn-warning text-white text-uppercase font-weight-bold mt-5"
          style={style.Link}
        >
          Retour
        </Link>
      </form>
    </div>
  );
}

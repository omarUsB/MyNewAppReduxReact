import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addstg } from "./store/actions";
import pc from './pc.jpg'

export default function AjouterArticle() {
  const dispatch=useDispatch()
  const liste = useSelector((state) => state.liststg);
  const style = {
    Link: {
      textDecoration: 'none',
      marginLeft: '20px',
    },
    body: {
      backgroundImage: `url(${pc})`,
      backgroundSize: 'cover',
      borderRadius:'2pc',
      height: '100vh',
      width: '100%',
      marginLeft: '90px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    form: {
      width: "600px",
      padding: "20px",
      backgroundColor: "#1a202c",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    text: {
      fontFamily: "Fantasy",
      color: "black",
    },
    input: {
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      width: "100%",
      boxSizing: "border-box",
    },
    button: {
      backgroundColor: "#dc3545",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
      width: "100%",
      cursor: "pointer",
    },
    backButton: {
      backgroundColor: "#ffc107",
      color: "#212529",
      padding: "10px",
      borderRadius: "5px",
      width: "100%",
      cursor: "pointer",
      marginTop: "10px",
    },
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
    <div className="container" style={style.body} >
      <form className="form-group" style={style.form} >
        <h1 style={style.text}>Ajouter Nouveau Stagiaire :</h1>
        <div className="form-text text-warning" style={style.text}>Tout les infos est obligee</div>

        <label className="form-label text-white" style={style.text}>ID :</label>
        <input  style={style.input}
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
          className="btn btn-danger text-uppercase font-weight-bold mt-2"
         style={style.button}>
          Ajouter
        </button>

        <Link
          to="/Home"
          className="btn btn-warning text-white text-uppercase font-weight-bold "
          style={style.backButton}
        >
          Retour
        </Link>
      </form>
    </div>
  );
}

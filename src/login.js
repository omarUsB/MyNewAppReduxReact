import React, {  useState } from "react";
import { useLocation } from "react-router-dom";
import "../src/bootstrap-5.3.2-dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate=useNavigate()
    const [check,setcheck]=useState({
        username:'',
        pass:''
    })
    const location = useLocation();
    const { reg } = location.state || {}
    const {username,pass}=reg || {}

  

  const style = {
    pic: {
      backgroundImage:
        'url("https://imgs.search.brave.com/fymdFKuCw_4xh-9Hf2FLA8gS2hM6ID8P0dVBvXer_Vg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMzU5MTQy/OS83MTY4L2kvNjAw/L2RlcG9zaXRwaG90/b3NfNzE2ODU2ODEt/c3RvY2stcGhvdG8t/cmVnaXN0ZXItbWVt/YmVyc2hpcC1hcHBs/aWNhdGlvbi1yZWdp/c3RyYXRpb24tam9p/bi5qcGc")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
    },
    did: {
      height: "100vh",
    },
  };
 
const handleuser=(e)=>{
        setcheck({...check,username:e.target.value})
}
const handlepass=(e)=>{
        setcheck({...check,pass:e.target.value})
}
const verife=(e)=>{
    e.preventDefault()
    if(username == check.username && pass == check.pass){
        alert('bienvenue monsiuer Dans Lapplication de gestion des Stagiaires')
        navigate('/Home')

    }else{
        alert('les donnes tu va ecrie et fausse ou tu ne regsitre pas')
    }
}


  return (
    <div style={style.pic}>
        <h1 className="container text-Dark">Login In</h1>
      <form className="container" style={style.did}>
        <div className="mb-3  ">
          <label  className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleuser}
          />
          <div  className="form-text">
            Tapez votre username
          </div>
        </div>
        <div className="  mb-3">
          <label className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            
            onChange={handlepass}
          />
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={verife}>
          Submit
        </button>

      </form>
    </div>
  );
}

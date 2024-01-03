import React from 'react'
import "../src/bootstrap-5.3.2-dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'

export default function contact() {



const style={
    div:{
        width:'350px',
      height:'250px'

    }
    ,
    di:{
      height:'100vh'
    },
  
}

  return (
  
    <div style={style.di}  className='row'>
                <div className="card text-bg-dark col-sm-4 m-5 " style={style.div}>
            <div className="card-header">Email</div>
            <div className="card-body">
              <h5 className="card-title">SChool.tt@gmail.com</h5>
              <p className="card-text">this email is only for emeregency things</p>

            </div>
<Link to={'/Home'} className=' btn btn-danger'>Retour</Link>
          </div>
                <div className="card text-bg-dark col-sm-4  m-5" style={style.div}>
            <div className="card-header">Telephone</div>
            <div className="card-body">
              <h5 className="card-title">+212 2316487</h5>
              <p className="card-text">this phone number only for parents.</p>

            </div>
<Link to={'/Home'} className=' btn btn-danger'>Retour</Link>
          </div>
                <div className="card text-bg-dark col-sm-4  m-5" style={style.div}>
            <div className="card-header">Location</div>
            <div className="card-body">
              <h5 className="card-title">marrakech</h5>
              <p className="card-text">Ista Ntic Sidi youssef ben ali Dowar Dlam.</p>
            </div>
<Link to={'/Home'} className=' btn btn-danger'>Retour</Link>
          </div>
    </div>

  )
}

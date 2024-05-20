import React from 'react'
import { Link } from 'react-router-dom'
import Mono from '/monos.jpeg'
import './Defauls.css'

const Default = () => {
  return (
    <div className='page'>
        <div className='section'>
            <div className='default-left'>
                <h2>Oh, al parecer esta sección aún no existe.</h2>
                <p>Lo sentimos por las inconveniencias, pero estamos trabajando en esto, por favor tenga paciencia.</p>
                <Link to={"/login"} className='btn'>Volver al inicio</Link>
            </div>
            <div className='default-right'>
                {/* <img src={Mono} alt="" /> */}
                <div className='image'></div>
            </div>
        </div>
    </div>
  )
}

export default Default
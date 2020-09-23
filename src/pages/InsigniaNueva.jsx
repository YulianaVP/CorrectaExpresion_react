import React from 'react';
import '../components/styles/InsigniaNueva.css'
import Navbar from '../components/Navbar.jsx'
import LogoHeader from '../images/LogoWHITE.png'

import InsigniaFormulario from '../components/InsigniaFormulario';

class InsigniaNueva extends React.Component{
    state ={
        form: {
            user:'',
            pass:'',
            correo:'',
            grupo:'',
        }
    }

    handleChange = e =>{
        const nextForm = this.state.form
        nextForm [e.target.name] = e.target.value
        this.setState({
            form: nextForm,
        })
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className='header'>
                    <img className='img-fluid' src={LogoHeader} alt='Logo'/> 
                    <h1 className="titulo">CORRECTA EXPRESIÓN</h1>
                </div>
                <div className='container'>
                    <div className='row'>

                        <div className='col-6'>
                            <InsigniaFormulario onChange={this.handleChange} formValues={this.state.form}/>
                            <h5 className="regis1">No tienes una cuenta?</h5>
                            <a href="" className="regis2">Registrate</a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default InsigniaNueva;

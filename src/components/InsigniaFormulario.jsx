import React from 'react';

class InsigniaFormulario extends React.Component{
    // state={
    
    // };
    //EVENTO INPUT
    // handleChange = (e) =>{
    //     console.log({
    //         name: e.target.name,
    //         value: e.target.value
    //     })
    // }
    // handleChange = (e) =>{
    //     this.setState(
    //         {
    //             [e.target.name]: e.target.value
    //         }
    //     )
    // }

    //EVENTO BOTÓN
    handleClick = (e) =>{
        console.log('Botón presionado')
    }

    //EVENTO FORMULARIO

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Submit')
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <h1>
                    Ingresar
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Usuario:</label>
                        <input onChange={this.props.onChange} className='form-control' type='text' name='user'
                        value={this.props.formValues.user}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Contraseña:</label>
                        <input onChange={this.props.onChange} className='form-control' type='text' name='pass'
                        value={this.props.formValues.pass}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Correo:</label>
                        <input onChange={this.props.onChange} className='form-control' type='text' name='correo'
                        value={this.props.formValues.correo}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Grupo:</label>
                        <input onChange={this.props.onChange} className='form-control' type='text' name='grupo'
                        value={this.props.formValues.grupo}
                        />
                    </div>

                    <button onClick={this.handleClick} className='btn btn-primary'>
                        Continuar
                    </button>
                </form>
            </div>
        )
    }
}
export default InsigniaFormulario;
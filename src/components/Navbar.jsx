import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <div className='Navbar'>
                <div className='container-fluid'>
                    <a className='Navbar__brand'>
                        <span className='font-weight-light'>
                            Correcta Expresión
                        </span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;

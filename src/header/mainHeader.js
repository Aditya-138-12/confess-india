import React from 'react';
import './header.css';

const MainHeader = () =>{
    return (
        <>
            <div className='mainHeader'>
                <div className='logo'>Confess India</div>
                <div className='search'></div>
                <div className='Login'>
                    <div className='loginBtn'>Login</div>
                </div>
            </div>
        </>
    );
}

export default MainHeader;

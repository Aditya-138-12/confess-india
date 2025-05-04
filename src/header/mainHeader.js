import React from 'react';
import './header.css';

const MainHeader = () =>{
    return (
        <>
            <div className='mainHeader'>
                <div className='logo'>ConfessNet</div>
                <div className='search'>
                    <input type='text' placeholder='Search Confession' className='mainSearch'></input>
                </div>
                <div className='Login'>
                    <div className='loginBtn'>Login</div>
                </div>
            </div>
        </>
    );
}

export default MainHeader;

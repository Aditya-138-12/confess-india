import React from 'react';
import './header.css';

const MainHeader = () =>{
    return (
        <>
            <div className='mainHeader'>
                <div className='logo'><span style={{color:"#6E59A5"}}>Confess</span><span>Net</span></div>
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

import './App.css';
import MainConfession from './confession/main/main';
import MainHeader from './header/mainHeader';
import { MiniKitProvider } from '@worldcoin/minikit-js/minikit-provider';
import { MiniKit, VerificationLevel } from '@worldcoin/minikit-js';
import { useEffect, useState } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {

const [isInWorldApp, setisInWorldApp] = useState(0);

useEffect(() => {
  const handleVerify = async () => {
    if (!MiniKit.isInstalled()) {
      alert("Please open in the World App")
      setisInWorldApp(1);
      return
    }
  
    const verifyPayload = {
      action: 'verify_proof', // Same ID from Worldcoin Dev Portal
      signal: '0x12312',  // Optional
      verification_level: VerificationLevel.Device, // Orb or Device
    }
  
    try {
      const { finalPayload } = await MiniKit.commandsAsync.verify(verifyPayload)
  
      if (finalPayload.status === 'error') {
        console.log("Verification failed", finalPayload)
        return
      }
  
      // Send proof to backend
      const response = await fetch('https://confess-india-backend.onrender.com/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payload: finalPayload,
          action: verifyPayload.action,
          signal: '0x12312',  // Optional
        }),
      })
  
      const data = await response.json();

      console.log("Verification response data: ", data);
  
      if (response.status === 200) {
        alert("You are verified as a real human!")
      } else {
        alert("Verification failed: Already verified or bad proof.")
      }
    } catch (err) {
      console.error("Verification error", err)
    }
  };
  handleVerify();
}, []);
  

  return (
    <>
   <MiniKitProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/confession' element=
              {isInWorldApp && <div className='main'>
                <MainHeader/>
                <MainConfession/>
              </div>}
            />
          <Route path='/' element={
  <iframe
    src="/landing/index.html"
    title="Landing Page"
    style={{ width: '100%', height: '100vh', border: 'none' }}
  />
}/>

          </Routes>
        </BrowserRouter>
    </MiniKitProvider>
    </>
  );
}

export default App;

import './App.css';
import MainConfession from './confession/main/main';
import MainHeader from './header/mainHeader';
import { MiniKitProvider } from '@worldcoin/minikit-js/minikit-provider';
import { MiniKit, VerificationLevel } from '@worldcoin/minikit-js';
import { useEffect } from 'react';


function App() {

useEffect(() => {
  const handleVerify = async () => {
    if (!MiniKit.isInstalled()) {
      alert("Please open in the World App")
      return
    }
  
    const verifyPayload = {
      action: 'verify_proof', // Same ID from Worldcoin Dev Portal
      verification_level: VerificationLevel.Orb, // Orb or Device
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
        }),
      })
  
      const data = await response.json()
  
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
        <div className='main'>
          <MainHeader/>
          <MainConfession/>
        </div>
    </MiniKitProvider>
      {console.log("This tells that the mini kit is installed or not? " + MiniKit.isInstalled())}
    </>
  );
}

export default App;

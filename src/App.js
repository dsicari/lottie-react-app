import React, { useState } from 'react';
import Modal from 'react-modal';
import Lottie from 'lottie-react-web';
import animation from './animation.json';

import './App.css';

// To avoid warning of accessibility, make sure to bind modal to your appElement
// http://reactcommunity.org/react-modal/accessibility/
Modal.setAppElement('#root');

function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);
  
  // If needed to click overlay and close modal, choose 1
  // If needed to click overlay and DONT close modal, choose 2

  return (
    <>
      <p>Click overlay to close modal</p>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <br /><br />
      <p>You can't close this one</p>
      <button onClick={() => setSecondModalIsOpen(true)}>Open Modal</button>

      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay:{
            backgroundColor: 'rgba(255, 255, 255, 0.8)'            
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <Lottie
          options={{
            animationData: animation
          }}
        />      
      </Modal>    

      <Modal          
        isOpen={secondModalIsOpen} 
        onRequestClose={() => setSecondModalIsOpen(false)}
        shouldCloseOnEsc={false}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay:{
            backgroundColor: 'rgba(255, 255, 255, 0.8)'            
          },
          content: {
            position: 'absolute',
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            border: '0',
            background: 'transparent',            
            borderRadius: '0',
            padding: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }}
      >
        <div
          style={{
            width: '10%',
          }}
        >
          <Lottie
            options={{
              animationData: animation
            }}
          />
        </div>      
      </Modal>   

    </>
  );
}

export default App;

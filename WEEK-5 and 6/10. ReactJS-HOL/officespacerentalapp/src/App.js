import React from 'react';
import './App.css';

function App() {
  // Elements and objects as required by the lab document
  const element = "Office Space";
  const sr = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80";
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;
  
  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  // Logic to dynamically assign color class based on Rent threshold
  let colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push('textRed');
  } else {
    colors.push('textGreen');
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}
      <h1>Name: {ItemName.Name}</h1>
      <h3 className={colors[0]}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;
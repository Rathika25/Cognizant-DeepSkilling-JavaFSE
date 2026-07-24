import React from 'react';

// Displays all 11 players
export function ListofPlayers({ players }) {
  return (
    <div>
      {players.map((item, index) => (
        <div key={index}>
          <li>Mr. {item.name} <span>{item.score}</span></li>
        </div>
      ))}
    </div>
  );
}

// Filters and displays players with scores <= 70
export function Scorebelow70({ players }) {
  const players70 = [];
  players.map((item) => {
    if (item.score <= 70) {
      players70.push(item);
    }
    return item;
  });

  return (
    <div>
      {players70.map((item, index) => (
        <div key={index}>
          <li>Mr. {item.name} <span>{item.score}</span></li>
        </div>
      ))}
    </div>
  );
}
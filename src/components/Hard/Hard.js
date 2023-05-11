import React from 'react';
import {useEffect} from 'react';
const HardMode = (props) => {
  const setPlayerY = props.setPlayerY
  const username = props.username
  const mazeLayout = [
    [1, 1, 1, 1, 1, 1, 1, 0, 1],
    [0, 0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 1, 1],
    ];
  const startingPosition = mazeLayout[1][0]

    useEffect(() => {
      setPlayerY(startingPosition)
    })
    return (
      <>
        <div className='welcome-message'>Welcome to Hard Mode {username}</div>
        <div className="maze-container">
          {mazeLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="maze-row">
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  className={`maze-cell ${cell === 1 ? 'wall' : 'path'}`}
                />
              ))}
            </div>
          ))}
        </div>
    </>
      );
};

export default HardMode;
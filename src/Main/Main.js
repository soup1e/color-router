import React from 'react';
import { useParams } from 'react-router-dom';
import './Main.css';

export default function Main() {
  const { red, green, blue } = useParams();
  return (
    <>
      <div className="main" style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
        <p className="colors">
          rgb({red}, {green}, {blue})
        </p>
      </div>
    </>
  );
}

import React from 'react';
import { useLocation } from 'react-router-dom';
import Beluga from './Beluga';
import Blue from './Blue';

export default function Amelia() {
  const { search } = useLocation();
  const match = search.match(/type=(.*)/);
  const type = match?.[1];
  return (
    <div className="aWrapper">
      <h2>Amelia<span>!</span></h2>
      {type === 'beluga' && <Beluga />}
      {type === 'blue' && <Blue />}
    </div>
  );
}
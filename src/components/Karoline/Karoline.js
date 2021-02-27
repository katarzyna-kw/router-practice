import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';

export default function Karoline() {
  const { path } = useRouteMatch();

  return <h2>Karoline</h2>;
}
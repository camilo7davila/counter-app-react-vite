import * as React from 'react';
import ReactDOM from 'react-dom/client';

// import { App } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as any).render(
  <React.StrictMode>
    {/* <FirstApp title='Hola soy Camilo' subtitle={12345} /> */}
    <CounterApp value={123} />
  </React.StrictMode>
)
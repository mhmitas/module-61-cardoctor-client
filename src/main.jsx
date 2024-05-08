import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import AuthProviders from './providers/AuthProviders';
import ServerProvider from './providers/ServerProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ServerProvider>
      <AuthProviders>
        <RouterProvider router={router}></RouterProvider>
      </AuthProviders>
    </ServerProvider>
  </React.StrictMode>,
)

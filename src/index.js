import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Nav from './components/Nav';
import MI from './pages/MI';
import RCB from './pages/RCB';
import CSK from './pages/CSK';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Nav />}/>
      <Route path="mi" element={<MI />} />
      <Route path="rcb" element={<RCB />} />
      <Route path="csk" element={<CSK />} />
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Pages/HomeCompo/Home.jsx';
import MovieDetails from './Components/Pages/MovieDetails/MovieDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:'movie-detail/:id',
    element:<MovieDetails/>,
    loader:()=>fetch('https://api.tvmaze.com/search/shows?q=all')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)

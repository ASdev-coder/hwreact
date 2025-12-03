import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,  RouterProvider } from 'react-router';
import MiniQuiz from './components/MiniQuiz';
import ShoppingList from './components/LogicalApp';
import MagicBall from './components/MagicBall';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <div className="App">
            <MiniQuiz />
          </div>
        ),
      },
      {
        path: "shoppinglist",
        element: <ShoppingList />,
      },
      {
        path: "magicball",
        element: (
          <div className="App">
            <MagicBall />
          </div>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

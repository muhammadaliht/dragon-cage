import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom'; 
import NewPrimal from './components/primalScreens/NewPrimal';
import CreatePrimal from './components/primalScreens/CreatePrimal';
import SetupPrimal from './components/primalScreens/SetupPrimal';
import PrimalScreen from './components/primalScreens/PrimalScreen';
import Dashboard from './components/dashboard/Dashboard';
import Account from './components/dashboard/Account';
import Snippets from './components/dashboard/Snippets';
import EditRoad from './components/dashboard/EditRoad';
import Handles from './components/dashboard/Handles';


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PrimalScreen /> },
      { path: "new-primal", element: <NewPrimal /> },
      { path: "create-primal", element: <CreatePrimal /> },
      { path: "setup-primal", element: <SetupPrimal /> },
      { path: "dashborad", element: <Dashboard /> }, // Fixed typo: "dashborad" -> "dashboard"
      { path: "account", element: <Account /> },
      { path: "snippets", element: <Snippets /> },
      { path: "edit-road", element: <EditRoad /> },
      { path: "handles", element: <Handles /> },
    ],
  },
]);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
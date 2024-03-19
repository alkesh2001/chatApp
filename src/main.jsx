import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PersistGate } from 'redux-persist/es/integration/react'
import { RouterProvider ,createBrowserRouter} from 'react-router-dom'
import { SignUp ,
        Login
} from './Component/index.js'
import { Provider } from 'react-redux'
import store,{persistor} from './Store/Store.js'
import Home from './Page/Home.jsx'
import AvalaibleUser from './Page/AvalaibleUser.jsx'

const router = createBrowserRouter([
  {
    path : '/' ,
    element: <App/>,
    children: [
      {
        path: '/SignUp',
        element : <SignUp/>
      },
      {
        path: '/Login',
        element : <Login/>
      },
      {
        path : '/Home',
        element : <Home/>
      },
      {
        path : '/AvalaibleUser',
        element : <AvalaibleUser/>
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)

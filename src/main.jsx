import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider ,createBrowserRouter} from 'react-router-dom'
import { SignUp ,
        Login
} from './Component/index.js'
import { Provider } from 'react-redux'
import store from './Store/Store.js'
import Home from './Page/Home.jsx'

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
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './routes/route.tsx'
import store from './redux/store.ts'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Provider store={store}>
         <RouterProvider router={router}/>
         <Toaster/>
     </Provider>
  </React.StrictMode>,
)

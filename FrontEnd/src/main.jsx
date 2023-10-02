import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DbProvider, FirebaseProvider, StorageProvider } from './Context/FirebaseContext.jsx'
import { Provider } from 'react-redux'
import store from './Store/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseProvider>
        <DbProvider>
          <StorageProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </StorageProvider>
        </DbProvider>
      </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

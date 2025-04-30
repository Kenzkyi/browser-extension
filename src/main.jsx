import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './global/store.js'
import persistStore from 'redux-persist/es/persistStore'
import { PersistGate } from 'redux-persist/integration/react'
import BrowserExtensionContext from './context/BrowserExtensionContext.jsx'

let persistor = persistStore(store)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserExtensionContext>
          <App />
        </BrowserExtensionContext>
      </PersistGate>
    </Provider>
  </StrictMode>,
)

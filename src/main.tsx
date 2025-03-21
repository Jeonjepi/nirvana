import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/custom-fonts.css' // 폰트 CSS 임포트
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './contexts/AppContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
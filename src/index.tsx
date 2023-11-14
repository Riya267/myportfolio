import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from './contexts/themeProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter basename="/">
    <ThemeProvider>
       <App />
    </ThemeProvider>
  </BrowserRouter>,
)

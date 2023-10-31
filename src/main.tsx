import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './queryClient'
import './dependencias/vendor/bootstrap/css/bootstrap.min.css';
import './dependencias/vendor/animate.css/animate.min.css'
//import './dependencias/vendor/aos/aos.css'
import 'aos/dist/aos.css'
import './dependencias/vendor/bootstrap-icons/bootstrap-icons.css'
import './dependencias/vendor/boxicons/css/boxicons.css'
import './dependencias/vendor/glightbox/css/glightbox.min.css'
import './dependencias/vendor/swiper/swiper-bundle.min.css'
import './App.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './dependencias/main.js'











ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
)

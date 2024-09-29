import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './Router.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import OrderProvider from './contexts/OrderContext.tsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OrderProvider>
      <RouterProvider router={router} />
    </OrderProvider>
  </StrictMode>,
)

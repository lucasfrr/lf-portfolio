import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.ts'
import './utils/i18n.ts'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={Routes} />
    </ThemeProvider>
  </StrictMode>,
)

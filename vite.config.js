import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'rniay-2401-4900-8814-1021-ed4a-bcec-7055-d1f8.a.free.pinggy.link',
      
    ]
  }
})

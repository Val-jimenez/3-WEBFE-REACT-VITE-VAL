import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://val-jimenez.github.io/3-WEBFE-REACT-VITE-VAL/' // This will be the default path for my GitPages deployment
})

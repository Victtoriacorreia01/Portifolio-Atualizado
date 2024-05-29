import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['aos/dist/aos.css', '@fortawesome/react-fontawesome', '@fortawesome/free-brands-svg-icons']
    }
  },
  plugins: [react()],
})


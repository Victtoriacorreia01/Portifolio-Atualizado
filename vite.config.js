// vite.config.js
export default {
  build: {
    rollupOptions: {
      external: ['aos/dist/aos.css', '@fortawesome/react-fontawesome', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-solid-svg-icons']
    }
  }
}

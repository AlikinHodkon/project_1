import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://alikinhodkon.github.io/project_1",
  plugins: [react()],
})

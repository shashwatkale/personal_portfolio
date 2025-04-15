export default defineConfig({
  plugins: [react()],
  base: '/personal_portfolio', 
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const directories = id.toString().split('node_modules/')[1].split('/');
            if (directories[0].startsWith('@')) {
              return `${directories[0]}/${directories[1]}`;
            }
            return directories[0];
          }
        },
      },
    },
  },
});

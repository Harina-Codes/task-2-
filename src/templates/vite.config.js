import { defineConfig } from 'vite';
import { resolve } from 'path';
import nunjucks from 'vite-plugin-nunjucks';

// Helper function for resolving file paths
function resolvePath(dir) {
  return resolve(__dirname, dir);
}

export default defineConfig({
  // Configure the Nunjucks plugin
  plugins: [
    nunjucks({
      // Set the root directory where Nunjucks looks for templates
      templatesDir: resolvePath('./src/templates'),
      // Global data that can be accessed in all templates (e.g., brand name)
      nunjucksData: {
        brandName: 'Harina',
        supportEmail: 'info@harina.com',
        supportPhone: '(555) 123-4567'
      }
    }),
  ],
  
  // Configuration for the build process (crucial for multi-page applications)
  build: {
    outDir: 'dist', // Required output directory defined in Task 2
    rollupOptions: {
      input: {
        // Define all three entry points
        main: resolvePath('src/templates/index.html'),
        about: resolvePath('src/templates/about-services.html'),
        contact: resolvePath('src/templates/contact.html'),
      }
    }
  },

  // Set the source root for the development server
  root: resolvePath('src/templates'),
});

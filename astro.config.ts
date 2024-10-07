import tutorialkit from '@tutorialkit/astro';
import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  site: 'https://javascript-tutorial.oluwasetemi.dev',
  integrations: [tutorialkit({
    components: {
      TopBar: './src/components/CustomTopBar.astro',
    }
  })],
});

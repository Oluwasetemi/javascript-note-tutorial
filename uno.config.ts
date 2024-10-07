import { defineConfig } from '@tutorialkit/theme';
import { presetWebFonts } from 'unocss';

export default defineConfig({
  shortcuts: {
    'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-green-300 via-teal-400 to-purple-500',
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  presets: [
    presetWebFonts({
      fonts: {
        strong: 'Rubik Iso',
        fast: 'Ubuntu',
        hand: 'Caveat',
        mono: {
          name: 'IBM Plex Mono',
          italic: true,
        },
      },
    }),
  ],
});

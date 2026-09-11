import type { CapacitorConfig } from '@capacitor/cli';

// O app é renderizado no servidor (TanStack Start), então o shell nativo carrega a
// aplicação publicada. Use CAP_SERVER_URL para apontar para o dev server na rede local
// (hot-reload) ou para o ambiente de homologação.
const serverUrl = process.env['CAP_SERVER_URL'] ?? 'https://oxyvra-shine-team.lovable.app';

const config: CapacitorConfig = {
  appId: 'app.lovable.oxyvra',
  appName: 'Oxyvra Biossegurança',
  webDir: 'dist/client',
  server: {
    url: serverUrl,
    cleartext: serverUrl.startsWith('http://'),
    androidScheme: 'https',
  },
  ios: {
    contentInset: 'always',
    backgroundColor: '#0B2238',
  },
  android: {
    backgroundColor: '#0B2238',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      backgroundColor: '#0B2238',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      splashImmersive: false,
    },
  },
};

export default config;

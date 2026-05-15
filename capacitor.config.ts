import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.zarathustra.echo',
  appName: '查拉图斯特拉的回声',
  webDir: 'web-preview',
  android: {
    backgroundColor: '#000000',
    allowMixedContent: false,
    overScrollMode: 'never' as any,
  },
  server: {
    androidScheme: 'https',
  },
};

export default config;

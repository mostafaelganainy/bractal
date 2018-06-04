import i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';

i18next
  .use(reactI18nextModule)
  .init(
    {
      interpolation: {
      // React already does escaping
        escapeValue: false,
      },
      lng: 'en', // 'en' | 'es'
      resources: {
        en: {
          translation: {
            age: { label: 'Age' },
            home: { label: 'Home' },
            name: { label: 'Name' },
            friends: 'Friends',
            appName: 'Ayk',
            hello: 'Hello',
          },
        },
        ar: {
          translation: {
            age: { label: ' ' },
            home: { label: 'Casa' },
            name: { label: 'Nombre' },
            friends: 'أصدقاء',
            appName: 'ايك',
            hello: 'مرحباً',
          },
        },
      },
    },
    (err, t) => {
      if (err) {
        return console.error(err);
      }
    },
  );

export default i18next;

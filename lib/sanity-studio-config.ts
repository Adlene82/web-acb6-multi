import type { Config } from 'sanity';
import { structureTool } from 'sanity/structure';

const { schemaTypes } = require('@/sanity/schemaTypes');

function localizedSingleton(S: any, schemaType: string, baseId: string, title: string) {
  return S.listItem()
    .title(title)
    .child(
      S.list()
        .title(title)
        .items([
          S.listItem().title('FR').child(S.document().schemaType(schemaType).documentId(`${baseId}-fr`)),
          S.listItem().title('RU').child(S.document().schemaType(schemaType).documentId(`${baseId}-ru`)),
        ]),
    );
}

export const sanityStudioConfig: Config = {
  name: 'web-acb6-multi',
  title: 'ACB6 Content Studio',
  projectId: '4zd6lvcv',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu éditable')
          .items([
            localizedSingleton(S, 'siteSettings', 'siteSettings', 'Paramètres du site'),
            localizedSingleton(S, 'homePage', 'homePage', 'Accueil'),
            localizedSingleton(S, 'aboutPage', 'aboutPage', 'À propos'),
            localizedSingleton(S, 'contactPage', 'contactPage', 'Contact'),
            S.divider(),
            S.listItem().title('Expertises').child(S.documentTypeList('expertise').title('Expertises')),
            S.listItem().title('Réalisations').child(S.documentTypeList('realisations').title('Réalisations')),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
};

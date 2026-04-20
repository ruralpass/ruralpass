import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { navbarConfigSchema } from './sanity/schemas/navbarConfig';

export default defineConfig({
  name: 'ruralpass',
  title: 'RuralPass CMS',
  projectId: '2vkq5kf1',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            S.listItem()
              .title('Navbar')
              .id('navbarConfig')
              .child(
                S.document()
                  .schemaType('navbarConfig')
                  .documentId('navbar-config')
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [navbarConfigSchema],
  },
});

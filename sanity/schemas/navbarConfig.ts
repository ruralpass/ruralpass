import { defineType, defineField, defineArrayMember } from 'sanity';

export const navbarConfigSchema = defineType({
  name: 'navbarConfig',
  title: 'Configuración Navbar',
  type: 'document',
  icon: () => '🔝',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Logo que aparece en la barra de navegación',
      options: { hotspot: true },
    }),
    defineField({
      name: 'logoAlt',
      title: 'Texto alternativo del logo',
      type: 'string',
      initialValue: 'RuralPass Logo',
    }),
    defineField({
      name: 'navLinks',
      title: 'Items del Menú',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Nombre', type: 'string' }),
            defineField({ name: 'href', title: 'URL', type: 'string' }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'href' },
          },
        }),
      ],
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Número de teléfono (href)',
      type: 'string',
      description: 'Ej: +56956277070 (sin espacios)',
      initialValue: '+56956277070',
    }),
    defineField({
      name: 'phoneLabel',
      title: 'Etiqueta del teléfono',
      type: 'string',
      description: 'Texto visible en el botón. Ej: +56 9 5627 7070',
      initialValue: '+56 9 5627 7070',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Navbar', subtitle: 'Configuración global' }),
  },
});

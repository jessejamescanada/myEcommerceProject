import { defineField, defineType } from 'sanity'
import categories from './categories'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(5)
          .max(25)
          .error('A description of between 5 - 25 characters is required'),
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'document',
      fields: [
        {
          title: 'category',
          name: 'category',
          type: 'string',
          options: {
            list: [...categories],
          },
        },
      ],
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(15)
          .max(120)
          .error('A description of between 15 - 120 characters is required'),
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],
})

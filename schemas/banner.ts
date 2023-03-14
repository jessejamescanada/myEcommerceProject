import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
    }),
    defineField({
      name: 'product',
      title: 'Product',
      type: 'string',
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
      name: 'smallText',
      title: 'SmallText',
      type: 'string',
    }),
    defineField({
      name: 'largeText',
      title: 'LargeText',
      type: 'string',
    }),
    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'string',
    }),
    defineField({
      name: 'saleTime',
      title: 'SaleTime',
      type: 'string',
    }),
  ],
})

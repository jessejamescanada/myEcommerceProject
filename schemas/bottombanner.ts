import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'bottomBanner',
  title: 'BottomBanner',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
    }),
    defineField({
      name: 'productName',
      title: 'ProductName',
      type: 'string',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'string',
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
